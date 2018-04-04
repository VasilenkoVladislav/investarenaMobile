import { currentTime } from './currentTime';
import moment from 'moment';

const monthEnum = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};

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

export function timeCreate (createTime) {
    let resultTime;
    let timeCreated = moment(createTime).format('YYYY/MM/DD HH:mm');
    let dateCreate = parseInt(moment.utc(createTime).format('x'));
    let diff = Math.abs(currentTime.getTime() - dateCreate);
    let timeValues = calculateTime(diff);
    if (timeValues.days > 0) {
        resultTime = getStringDate(timeCreated);
    } else if (timeValues.hours !== 0) {
        resultTime = timeValues.hours + ' ' + getNoun(timeValues.hours, 'hour', 'hrs');
    } else if (timeValues.minutes !== 0) {
        resultTime = timeValues.minutes + ' ' + getNoun(timeValues.hours, 'min', 'mins');
    } else {
        resultTime = 'Just now';
    }
    return resultTime;
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

function getStringDate (timeCreated) {
    let result = '';
    let minutes = timeCreated.split('/')[2].split(' ')[1].split(':')[1];
    let hours = timeCreated.split('/')[2].split(' ')[1].split(':')[0];
    let day = parseInt(timeCreated.split('/')[2].split(' ')[0]);
    let month = parseInt(timeCreated.split('/')[1]);
    let year = timeCreated.split('/')[0];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    if (currentYear > year) {
        result = monthEnum[month] + ' ' + day + ', ' + year;
    } else if (currentMonth > month) {
        result = monthEnum[month] + ' ' + day;
    } else {
        result = monthEnum[month] + ' ' + day + ' ' + 'at' + ' ' + hours + ':' + minutes;
    } return result;
}

function getNoun (number, one, two) {
    number = Math.abs(number);
    number %= 100;
    if (number === 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return two;
}
