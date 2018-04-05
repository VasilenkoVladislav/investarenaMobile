import { connectPlatformSuccess,
    connectPlatformError,
    updateUserStatistics } from '../redux/actions/entities/platformActions';
import { reconnectBrokerRequest, disconnectBrokerRequest } from '../redux/actions/entities/brokersActions';
import { getFavoritesSuccess, updateFavoriteSuccess } from '../redux/actions/entities/favoritesActions';
import _ from 'lodash';
import config from '../configApi/config';
import { updateQuotes } from '../redux/actions/entities/quotesActions';
import { updateQuotesSettings } from '../redux/actions/entities/quotesSettingsActions';
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import { Stomp } from 'stompjs/lib/stomp.js';

export default class Umarkets {
    constructor ({dispatch, getState}) {
        this.getState = getState;
        this.dispatch = dispatch;
        this.quotes = {};
        this.quotesSettings = {};
        this.openDeals = {};
        this.charts = {};
        this.userStatistics = {};
        this.statesQuotes = {};
        this.userSettings = {};
        this.allFavorites = [];
        this.dataDealToApi = null;
        this.websocket = null;
        this.reconnectionCounter = null;
        this.stompUser = null;
        this.stompPassword = null;
        this.sid = null;
        this.umSession = null;
        this.websrv = null;
        this.platformName = null;
        this.stompClient = null;
        this.hours = {'Minute': 1,
            'Minute5': 5,
            'Minute15': 15,
            'Minute30': 30,
            'Hour': 60,
            'Hour4': 60 * 4,
            'Hour8': 60 * 8,
            'Day': 60 * 24,
            'Week': 60 * 24 * 7,
            'Month': 60 * 24 * 31,
            'MINUTE': 1,
            'MINUTE5': 5,
            'MINUTE15': 15,
            'MINUTE30': 30,
            'HOUR': 60,
            'HOUR4': 60 * 4,
            'HOUR8': 60 * 8,
            'DAY': 60 * 24,
            'WEEK': 60 * 24 * 7,
            'MONTH': 60 * 24 * 31
        };
    }
    createWebSocketConnection  (params) {
        this.stompUser = params.stompUser;
        this.stompPassword = params.stompPassword;
        this.sid = params.sid;
        this.umSession = params.umSession;
        this.platformName = params.platformName;
        this.websrv = params.websrv;
        this.websocket = this.createSockJS(params);
        this.stompClient = Stomp.over(this.websocket);
        this.stompClient.debug = null;
        this.stompClient.heartbeat.outgoing = 0;
        this.stompClient.heartbeat.incoming = 0;
        this.stompClient.connect(this.stompUser, this.stompPassword, this.onConnect.bind(this), this.onError.bind(this), 'trading');
    }
    createSockJS (params) {
        if (this.platformName === 'umarkets') {
            return new SockJS(config.brokerWSUrl[this.platformName]);
        } else if (this.platformName === 'maximarkets') {
            const websrv = parseInt(params.websrv);
            const url = `${config.brokerWSUrl[this.platformName]}websrv${websrv}`;
            return new SockJS(url);
        }
    }
    closeWebSocketConnection () {
        if (this.websocket && this.stompClient) {
            this.websocket.close();
            this.stompClient.disconnect();
        }
    }
    onConnect () {
        this.dispatch(connectPlatformSuccess(this.platformName));
        if (this.stompClient !== null && this.sid !== null) {
            this.platformSubscribe();
            this.getStartData();
        }
        setInterval(this.getUserStatistics.bind(this), 30000);
    }
    onError (error) {
        this.dispatch(connectPlatformError(error));
        this.reconnect();
    }
    reconnect () {
        if (this.reconnectionCounter !== 1) {
            this.reconnectionCounter = 1;
            this.websocket && this.websocket.close();
            this.stompClient && this.stompClient.disconnect();
            this.dispatch(reconnectBrokerRequest(this.stompUser, this.stompPassword, this.platformName));
        } else {
            this.dispatch(disconnectBrokerRequest());
        }
    }
    platformSubscribe () {
        this.stompClient.subscribe('/amq/queue/session.' + this.sid, this.onWebSocketMessage.bind(this));
    }
    getStartData () {
        this.getUserAccount();
        this.getUserSettings();
        this.getUserStatistics();
        this.getUserRates();
        // this.getOpenDeals();
        // this.getClosedDeals();
        this.getFavorites();
    }
    getServerTime () {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"get_time","params":[]}');
            } catch (e) {
                // empty
            }
        }
    }
    getUserAccount () {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"get_user_account","params":[]}');
            } catch (e) {
                // empty
            }
        }
    }
    getUserSettings () {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"get_user_settings","params":[]}');
            } catch (e) {
                // empty
            }
        }
    }
    getUserStatistics () {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"get_user_statistics","params":[]}');
            } catch (e) {
                // empty
            }
        }
    }
    getUserRates () {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd" : "get_user_rates", "params": []}');
            } catch (e) {
                // empty
            }
        }
    }
    getFavorites () {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"get_favorites","params":[]}');
            } catch (e) {
                // empty
            }
        }
    }
    addFavorites (currency) {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"add_favorites","params":["' + currency + '"]}');
            } catch (e) {
                // empty
            }
        }
    }
    delFavorites (currency) {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"del_favorites","params":["' + currency + '"]}');
            } catch (e) {
                // empty
            }
        }
    }
    updateFavorite (quoteSecurity) {
        if (this.allFavorites.includes(quoteSecurity)) {
            this.delFavorites(quoteSecurity);
        } else {
            this.addFavorites(quoteSecurity);
        }
    }
    getOpenDeals () {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd" : "get_open_deals", "params": []}');
            } catch (e) {
                // empty
            }
        }
    }
    getClosedDeals (period = 'LAST_7_DAYS') {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd" : "get_closed_deals", "params": [' + period + ', null, null]}');
            } catch (e) {
                // empty
            }
        }
    }
    createOpenDeal (deal, dataDealToApi) {
        this.dataDealToApi = dataDealToApi;
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"send_open_market_order","params":["' + deal.security + '","' + deal.side + '",' + deal.amount + ']}');
            } catch (e) {
                // empty
            }
        }
    }
    closeOpenDeal (dealId) {
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"send_close_market_order","params":["' + dealId + '"]}');
            } catch (e) {
                // empty
            }
        }
    }
    duplicateOpenDeal (dealId, dataDealToApi) {
        this.dataDealToApi = dataDealToApi;
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            try {
                this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd" : "duplicate_open_deal", "params": ["' + dealId + '"]}');
            } catch (e) {
                // empty
            }
        }
    }
    changeOpenDeal (id, slRate = null, slAmount = null, tpRate = null, tpAmount = null) {
        const data = `${id},${slRate},${slAmount},${tpRate},${tpAmount}`;
        if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
            this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd":"change_open_deal","params":[' + data + ']}');
        }
    }
    getLimitStopOrders () {
        if (this.stompClient !== null && this.sid !== null && this.umid !== null) {
            this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '", "cmd" : "get_limit_stop_orders", "params": []}');
        }
    }
    getChartData (active, interval) {
        if (active && interval) {
            if (this.stompClient !== null && this.sid !== null && this.umSession !== null) {
                let chartsArr = [ [active, interval] ];
                chartsArr = JSON.stringify(chartsArr);
                try {
                    this.stompClient.send('/exchange/CMD/', {}, '{"sid":"' + this.sid + '", "umid": "' + this.umSession + '","cmd" : "get_chart_data", "array": ' + chartsArr + '}');
                } catch (e) {
                    // empty
                }
            }
        }
    }
    onWebSocketMessage (message) {
        const result = JSON.parse(message.body);
        if ((result.type === 'response' || result.type === 'update') && result.cmd === 'get_user_rates') {
            this.parseUserRates(result);
        } else if ((result.type === 'response' || result.type === 'update') && result.cmd === 'get_user_statistics') {
            this.parseUserStatistics(result);
        }
        if (result.type === 'response' && result.cmd === 'get_open_deals') {
            this.parseOpenDeals(result);
        } else if (result.type === 'response' && result.cmd === 'get_closed_deals') {
            this.parseClosedDeals(result);
        } else if (result.type === 'response' && result.cmd === 'get_user_settings') {
            this.parseUserSettings(result);
        } else if (result.type === 'response' && result.cmd === 'get_favorites') {
            this.parseFavorites(result);
        } else if (result.type === 'response' && result.cmd === 'get_chart_data') {
            this.parseChartData(result);
        } else if (result.type === 'event' && (result.name === 'favorites_security_added' || result.name === 'favorites_security_removed')) {
            this.parseUpdateFavorites(result);
        } else if (result.type === 'response' && result.cmd === 'send_close_market_order') {
            this.parseCloseMarketOrderResult(result);
        } else if (result.type === 'response' && result.cmd === 'send_open_market_order') {
            this.parseOpenMarketOrderResult(result);
        } else if (result.type === 'response' && result.cmd === 'open_market_order_rejected') {
            this.parseOpenMarketOrderResult(result);
        } else if (result.type === 'response' && result.cmd === 'duplicate_open_deal') {
            this.parseOpenMarketOrderResult(result);
        } else if (result.type === 'response' && result.cmd === 'get_limit_stop_orders') {
            // empty
        } else if (result.type === 'response' && result.cmd === 'change_open_deal') {
            this.parseChangeMarketOrderResult(result);
        } else if (result.type === 'event' && result.name === 'deal_opened_by_market_order') {
            this.parseOpenByMarketOrder(result);
        } else if (result.type === 'event' && result.name === 'deal_closed_by_market_order') {
            this.parseCloseByMarketOrder(result);
        } else if (result.type === 'event' && result.name === 'open_deal_changed') {
            this.parseChangeByMarketOrder(result);
        }
    }
    parseUserRates (result) {
        const content = result.content;
        const rates = content.rates;
        const data = {};
        rates.forEach((q) => {
            if (_.size(this.quotes) !== 0 && q.security in this.quotes) {
                this.getStateQuote(q.security, q, this.quotes[q.security]);
            }
            this.quotes[q.security] = {
                security: q.security,
                bidPrice: (q.bidPrice / 1000000).toString(),
                askPrice: (q.askPrice / 1000000).toString(),
                dailyChange: q.dailyChange,
                timestamp: q.timestamp,
                state: this.statesQuotes[q.security]
            };
            data[q.security] = {
                security: q.security,
                bidPrice: (q.bidPrice / 1000000).toString(),
                askPrice: (q.askPrice / 1000000).toString(),
                dailyChange: q.dailyChange,
                timestamp: q.timestamp,
                state: this.statesQuotes[q.security]
            };
            if (this.hasOwnProperty('publish')) {
                this.publish(q.security, this.quotes[q.security]);
            }
        });
        this.dispatch(updateQuotes(data));
    }
    getStateQuote (security, quote, oldQuote) {
        const newPrice = quote.bidPrice;
        const oldPrice = oldQuote.bidPrice * 1000000;
        if (newPrice !== oldPrice) {
            this.statesQuotes[security] = newPrice > oldPrice ? 'up' : 'down';
        }
    }
    parseUserSettings (result) {
        const content = result.content;
        const quotesSettings = content.securitySettings;
        this.userSettings = content;
        const keys = Object.keys(quotesSettings);
        let sortedQuotesSettings = {};
        keys.sort();
        for (let i in keys) {
            let key = keys[i];
            sortedQuotesSettings[key] = quotesSettings[key];
        }
        this.quotesSettings = sortedQuotesSettings;
        this.dispatch(updateQuotesSettings(this.quotesSettings));
    }
    parseChartData (result) {
        const chart = result.content;
        const quoteSecurity = chart.security;
        const timeScale = chart.barType;
        const bars = chart.bars;
        // this.dispatch(getChartDataSuccess({quoteSecurity, timeScale, bars}));
        // if (this.hasOwnProperty('publish')) {
        //     this.publish(`ChartData${quoteSecurity}`, {quoteSecurity, timeScale, bars});
        // }
    }
    parseOpenDeals (result) {
        const content = _.sortBy(result.content, 'dealSequenceNumber').reverse();
        let openDeals = {};
        content.map((openDeal) => {
            openDeal.openPrice = openDeal.openPrice / 1000000;
            openDeal.amount = openDeal.amount / 1000000;
            openDeals[openDeal.dealId] = openDeal;
        });
        // this.dispatch(getOpenDealsSuccess(openDeals));
    }
    parseClosedDeals (result) {
        const content = _.sortBy(result.content.closedDeals, 'closeTime').reverse();
        let closedDeals = {};
        content.map((closeDeal) => {
            closeDeal.amount = closeDeal.amount / 1000000;
            closeDeal.pnl = closeDeal.pnl / 1000000;
            closeDeal.openPrice = closeDeal.openPrice / 1000000;
            closeDeal.closePrice = closeDeal.closePrice / 1000000;
            closedDeals[closeDeal.dealId] = closeDeal;
        });
        // this.dispatch(getCloseDealsSuccess(closedDeals));
    }
    parseUserStatistics (result) {
        let content = result.content;
        this.userStatistics = {
            balance: content.balance,
            freeBalance: content.freeBalance,
            marginUsed: content.marginUsed,
            totalEquity: content.totalEquity,
            unrealizedPnl: content.unrealizedPnl
        };
        this.dispatch(updateUserStatistics(this.userStatistics));
    }
    parseFavorites (result) {
        const content = result.content;
        this.allFavorites = content.favorites;
        this.dispatch(getFavoritesSuccess(content.favorites));
    }
    parseUpdateFavorites (result) {
        const content = result.content;
        if (this.allFavorites.includes(content.security)) {
            this.allFavorites = this.allFavorites.filter(favorites => favorites !== content.security);
        } else {
            this.allFavorites = [...this.allFavorites, content.security];
        }
        this.dispatch(updateFavoriteSuccess(content.security));
    }
    parseOpenMarketOrderResult (result) {
        if (result.response === 'INSUFFICIENT_BALANCE') {
            this.dataDealToApi = null;
        } else if (result.response === 'NOT_TRADING_TIME') {
            this.dataDealToApi = null;
        }
    }
    parseCloseMarketOrderResult (result) {
        if (result.response === 'NOT_TRADING_TIME') {
        } else if (result.response === 'CLOSE_DEAL_INTERVAL_IS_TOO_SMALL') {

        }
    }
    parseChangeMarketOrderResult (result) {
        if (result.response === 'NOT_TRADING_TIME') {
        } else if (result.response === 'INVALID_ORDER_PRICE') {

        }
    }
    parseOpenByMarketOrder () {
        this.getOpenDeals();
        if (this.dataDealToApi) {
            // this.dispatch(createOpenDealApi(this.dataDealToApi));
            this.dataDealToApi = null;
        }
    }
    parseCloseByMarketOrder (result) {
        // this.dispatch(closeOpenDealPlatformSuccess(result.content.dealId));
    }
    parseChangeByMarketOrder (result) {
        const content = result.content;
        if (content.stopLossAmount) {
            content.stopLossPrice = null;
        } else if (content.stopLossPrice) {
            content.stopLossAmount = null;
        } else {
            content.stopLossPrice = null;
            content.stopLossAmount = null;
        }
        if (content.takeProfitAmount) {
            content.takeProfitPrice = null;
        } else if (content.takeProfitPrice) {
            content.takeProfitAmount = null;
        } else {
            content.takeProfitPrice = null;
            content.takeProfitAmount = null;
        }
        // this.dispatch(changeOpenDealPlatformSuccess(content));
    }
}
