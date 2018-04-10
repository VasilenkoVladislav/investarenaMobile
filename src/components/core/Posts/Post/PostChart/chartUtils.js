import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
import moment from 'moment';
import { currentTime } from '../../../../../helpers/currentTime';

const d3 = { scale, shape };

export default class ChartUtils {

    static hours = {'Minute': 1,
        'Minute5': 5,
        'Minute1': 15,
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

    static createScaleX (start, end, width) {
        return d3.scale.scaleTime()
            .domain([moment(start).valueOf(), moment(end).valueOf()])
            .range([0, width]);
    }

    static createScaleY (minY, maxY, height) {
        return d3.scale.scaleLinear()
            .domain([maxY, minY])
            .range([0, height / 2]);
    }
    static xAccessor = d => new Date(d.time);
    static yAccessor = (d, recommend) => recommend === 'Buy' ? d.closeAsk : d.closeBid;

    static createLineChart ({data, quote, timeScale, recommend, createdAt, forecast, width, height}) {
        const timeNow = currentTime.getTime();
        const bars = [...data];
        const lastBar = {
            closeAsk: Math.round(quote.askPrice * 1000000),
            closeBid: Math.round(quote.bidPrice * 1000000),
            highAsk: Math.round(quote.askPrice * 1000000),
            highBid: Math.round(quote.bidPrice * 1000000),
            lowAsk: Math.round(quote.askPrice * 1000000),
            lowBid: Math.round(quote.bidPrice * 1000000),
            openAsk: bars[bars.length - 2].closeAsk,
            openBid: bars[bars.length - 2].closeBid,
            time: timeNow
        };
        if (timeNow > bars[bars.length - 1].time) {
            bars.push(lastBar);
        } else {
            bars[bars.length - 1] = lastBar;
        }
        const scaleX = ChartUtils.createScaleX(createdAt, forecast, width);
        const extentY = d3Array.extent(bars.map(x => ChartUtils.yAccessor(x, recommend)));
        const scaleY = ChartUtils.createScaleY(extentY[0], extentY[1], height);
        const lineShape = d3.shape.area()
            .x(d => scaleX(ChartUtils.xAccessor(d)))
            .y0(height)
            .y1(d => scaleY(ChartUtils.yAccessor(d, recommend)));
        return {
            path: lineShape(bars),
            ticks: bars.map((d) => {
                const time = d.time;
                const value = recommend === 'Buy' ? d.closeAsk : d.closeBid;
                return {
                    x: scaleX(time),
                    y: scaleY(value),
                    d,
                };
            }),
        };
    }

    static createLineExpiredChart({data, recommend, createdAt, forecast, width, height}) {
        const scaleX = ChartUtils.createScaleX(
            createdAt,
            forecast,
            width
        );
        const extentY = d3Array.extent(data.map(x => ChartUtils.yAccessor(x, recommend)));
        const scaleY = ChartUtils.createScaleY(extentY[0], extentY[1], height);

        const lineShape = d3.shape.area()
            .x(d => scaleX(ChartUtils.xAccessor(d)))
            .y0(height)
            .y1(d => scaleY(ChartUtils.yAccessor(d, recommend)));

        return {
            path: lineShape(data),
            ticks: data.map((d) => {
                const time = d.time;
                const value = recommend === 'Buy' ? d.closeAsk : d.closeBid;
                return {
                    x: scaleX(time),
                    y: scaleY(value),
                    d,
                };
            }),
        };
    }

    static getTimeScale (createdAt, forecast) {
        const timeScale = moment.utc(moment(forecast).diff(moment(createdAt))) / 1000 / 60;
        const minBars = 20; // default 240
        if (timeScale < 0) return undefined;
        else if (timeScale < minBars) return 'MINUTE';
        else if (timeScale < minBars * 5) return 'MINUTE5';
        else if (timeScale < minBars * 15) return 'MINUTE15';
        else if (timeScale < minBars * 30) return 'MINUTE30';
        else if (timeScale < minBars * 60) return 'HOUR';
        else if (timeScale < minBars * 60 * 4) return 'HOUR4';
        else if (timeScale < minBars * 60 * 8) return 'HOUR8';
        else if (timeScale < minBars * 60 * 24) return 'DAY';
        else if (timeScale < minBars * 60 * 24 * 7) return 'WEEK';
        else if (timeScale < minBars * 60 * 24 * 31) return 'MONTH';
    }
}
