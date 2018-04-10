import { GET_CHART_DATA_REQUEST,
    GET_CHART_DATA_SUCCESS,
    GET_CHART_DATA_ERROR } from '../../constansActions';


export function getChartDataRequest (quoteSecurity, timeScale) {
    return { type: GET_CHART_DATA_REQUEST, payload: { quoteSecurity, timeScale } };
}

export function getChartDataSuccess (quoteSecurity, timeScale, bars) {
    return { type: GET_CHART_DATA_SUCCESS, payload: { quoteSecurity, timeScale, bars } } ;
}

export function getChartDataError () {
    return { type: GET_CHART_DATA_ERROR };
}