import moment from 'moment';

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
    static getStrictTimescale (createdAt, forecast) {
        const timeScale = moment.utc(moment(forecast).diff(moment(createdAt))) / 1000 / 60;
        const minBars = 45; // default 240
        if (timeScale < 0) return undefined;
        else if (timeScale < minBars) return 1 * 60 * 1000 * 5;
        else if (timeScale < minBars * 5) return 5 * 60 * 1000 * 5;
        else if (timeScale < minBars * 15) return 15 * 60 * 1000 * 5;
        else if (timeScale < minBars * 30) return 30 * 60 * 1000 * 5;
        else if (timeScale < minBars * 60) return 60 * 60 * 1000 * 5;
        else if (timeScale < minBars * 60 * 4) return 4 * 3600 * 1000 * 5;
        else if (timeScale < minBars * 60 * 8) return 8 * 3600 * 1000 * 5;
        else if (timeScale < minBars * 60 * 24) return 24 * 3600 * 1000 * 5;
        else if (timeScale < minBars * 60 * 24 * 7) return 7 * 24 * 3600 * 1000 * 5;
        else if (timeScale < minBars * 60 * 24 * 31) return 31 * 24 * 3600 * 1000 * 5;
    }

    static getTimeScale (createdAt, forecast) {
        const timeScale = moment.utc(moment(forecast).diff(moment(createdAt))) / 1000 / 60;
        const minBars = 45; // default 240
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
