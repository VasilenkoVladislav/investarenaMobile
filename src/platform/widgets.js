import { connectPlatformSuccess, connectPlatformError } from '../redux/actions/entities/platformActions';
import { getFavoritesRequest, updateFavoriteRequest } from '../redux/actions/entities/favoritesActions';
import _ from 'lodash';
import config from '../configApi/config';
import { updateQuotes } from '../redux/actions/entities/quotesActions';
import { updateQuotesSettings } from '../redux/actions/entities/quotesSettingsActions';

export default class Widgets {
    constructor ({ dispatch }) {
        this.dispatch = dispatch;
        this.quotes = {};
        this.websocket = null;
        this.quotesSettings = {};
    }
    createWebSocketConnection () {
        this.closeWebSocketConnection();
        this.websocket = new WebSocket(config.brokerWSUrl.widgets);
        this.websocket.onopen = () => {
            this.dispatch(connectPlatformSuccess('widgets'));
            this.onConnect();
        };
        this.websocket.onerror = () => {
            this.dispatch(connectPlatformError('widgets'));
        };
        this.websocket.onmessage = (evt) => {
            this.onWebSocketMessage(evt.data);
        };
    }
    closeWebSocketConnection () {
        if (this.websocket) {
            this.websocket.close();
        }
    }
    onConnect () {
        this.subscribeRates();
        this.subscribeSettings();
        this.getFavorites();
    }
    onWebSocketMessage (data) {
        const msg = JSON.parse(data.trim());
        if (msg.module) {
            switch (msg.module) {
                case 'rates':
                    this.parseRates(msg);
                    break;
                case 'settings':
                    this.parseSettings(msg);
                    break;
                case 'history':
                    this.parseChartData(msg);
                    break;
                case 'error':
                    break;
                default:
                    break;
            }
        }
    }
    subscribeRates () {
        this.websocket.send(JSON.stringify({
            module: 'rates',
            cmd: 'subscribe'
        }));
    }
    subscribeSettings () {
        this.websocket.send(JSON.stringify({
            module: 'settings',
            cmd: 'trading',
            args: ''
        }));
    }
    getChartData (security, interval) {
        if (security && interval) {
            interval = interval.charAt(0) + interval.slice(1).toLowerCase();
            this.websocket.send(JSON.stringify({
                module: 'history',
                cmd: 'bars',
                args: {
                    period: interval,
                    quote: security,
                    count: 250,
                    name: 'name'
                }
            }));
        }
    }
    getFavorites () {
        this.dispatch(getFavoritesRequest());
    }
    updateFavorite (quoteSecurity) {
        this.dispatch(updateFavoriteRequest(quoteSecurity));
    }
    parseRates (msg) {
        let data = {};
        if (msg.args) {
            msg.args.forEach((q) => {
                this.quotes[q.Name] = {
                    security: q.Name,
                    bidPrice: q.Sess === 'Close' ? q.ESV : q.Bid,
                    askPrice: q.Sess === 'Close' ? q.ESV : q.Ask,
                    dailyChange: +q.Rate,
                    timestamp: q.Timestamp,
                    isSession: q.Sess === 'Open',
                    state: this.getStateQuote(q, this.quotes[q.Name])
                };
                data[q.Name] = {
                    security: q.Name,
                    bidPrice: q.Sess === 'Close' ? q.ESV : q.Bid,
                    askPrice: q.Sess === 'Close' ? q.ESV : q.Ask,
                    dailyChange: +q.Rate,
                    timestamp: q.Timestamp,
                    isSession: q.Sess === 'Open',
                    state: this.getStateQuote(q, this.quotes[q.Name])
                };
            });
            this.dispatch(updateQuotes(data));
        }
    }
    parseSettings (msg) {
        const quotesSettings = JSON.parse(msg.args);
        const keys = Object.keys(quotesSettings);
        let sortedQuotesSettings = {};
        keys.sort();
        for (let i in keys) {
            sortedQuotesSettings[keys[i]] = quotesSettings[keys[i]];
        }
        this.quotesSettings = sortedQuotesSettings;
        this.dispatch(updateQuotesSettings(this.quotesSettings));
    }
    parseChartData (msg) {
        if (msg.args) {
            const timeScale = msg.args.barType.toUpperCase();
            const quoteSecurity = msg.args.security.replace('/', '');
            let bars = [];
            msg.args.bars.forEach((e) => {
                bars.push({
                    closeAsk: e.closeAsk * 1000000,
                    closeBid: e.closeBid * 1000000,
                    highAsk: e.highAsk * 1000000,
                    highBid: e.highBid * 1000000,
                    lowAsk: e.lowAsk * 1000000,
                    lowBid: e.lowBid * 1000000,
                    openAsk: e.openAsk * 1000000,
                    openBid: e.openBid * 1000000,
                    time: e.time * 1000
                });
            });
            bars = _.sortBy(bars, 'time');
            // this.dispatch(getChartDataSuccess({quoteSecurity, timeScale, bars }));
        }
    }
    getStateQuote (quote, oldQuote) {
        if (oldQuote) {
            const newPrice = quote.Bid;
            const oldPrice = oldQuote.bidPrice;
            if (newPrice !== oldPrice) {
                return newPrice > oldPrice ? 'up' : 'down';
            } else {
                return 'notUpdate';
            }
        } else {
            return 'notUpdate';
        }
    }
}
