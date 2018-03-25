import { currentTime } from './currentTime';
import moment from 'moment';

export function timeForecastRemain (forecastTime) {
    const dateForecast = parseInt(moment.utc(forecastTime).format('x'));
    const diff = dateForecast - currentTime.getTime();
    if (diff > 0) {
        const timeValues = calculateTime(diff);
        const resultValues = timeValues.hours + ':' + timeValues.minutes + ':' + timeValues.seconds;
        return timeValues.days + 'd' + ' ' + moment(resultValues, 'HH:mm:ss').format('HH:mm:ss');
    } else {
        return 0 + 'd' + ' ' + '00:00:00';
    }
}

function calculateTime (timeValue) {
    let calculateTime = Math.floor(timeValue / 1000);
    const seconds = calculateTime % 60;
    calculateTime = Math.floor(calculateTime /= 60);
    const minutes = calculateTime % 60;
    calculateTime = Math.floor(calculateTime /= 60);
    const hours = calculateTime % 24;
    calculateTime = Math.floor(calculateTime /= 24);
    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: calculateTime
    };
}
