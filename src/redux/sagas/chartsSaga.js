import { GET_CHART_DATA_REQUEST } from '../constansActions';
import { takeEvery } from 'redux-saga/effects';
import { platformService } from '../../platform/platformService';

export function getChartData ({payload}) {
    const { quoteSecurity, timeScale } = payload;
    platformService.platform.getChartData(quoteSecurity, timeScale);
}

export function * watchGetChartData () {
    yield takeEvery(GET_CHART_DATA_REQUEST, getChartData);
}

export const chartsSagas = [
    watchGetChartData()
];