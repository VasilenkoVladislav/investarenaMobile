import moment from 'moment';

export default class ChartUtils {
    static getStrictTimescale (createdAt, forecast) {
        const timeScale = moment.utc(moment(forecast).diff(moment(createdAt))) / 1000 / 60;
        const minBars = 50; // default 240
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
        const minBars = 50; // default 240
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
