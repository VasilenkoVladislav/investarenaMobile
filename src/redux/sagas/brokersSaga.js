import { call, put, select, takeLatest } from 'redux-saga/es/effects';
import { authorizeBrokerSuccess,
    authorizeBrokerError,
    reconnectBrokerSuccess,
    reconnectBrokerError } from '../actions/entities/brokersActions';
import { AUTHORIZE_BROKER_REQUEST,
    RECONNECT_BROKER_REQUEST } from '../constansActions';
import api from '../../configApi/apiResources';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeaders } from '../actions/entities/headersActions';
import { platformService } from '../../platform/platformService';

export function * authorizeBroker ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers, status } = yield call(api.brokers.authorizeBroker, payload, headersForRequest);
    if (data && headers && status) {
        yield put(updateHeaders(headers));
        if (status === 'success') {
            platformService.platform = 'umarkets';
            platformService.platform.createWebSocketConnection(data.broker);
            yield put(authorizeBrokerSuccess(payload.brokerName));
        } else {
            yield put(authorizeBrokerError(payload.brokerName));
        }
    } else {
        yield put(authorizeBrokerError(payload.brokerName));
    }
}

export function * reconnectBroker ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers, status } = yield call(api.brokers.reconnectBroker, payload, headersForRequest);
    if (data && headers && status) {
        yield put(updateHeaders(headers));
        if (status === 'success') {
            yield put(reconnectBrokerSuccess());
            platformService.platform = 'umarkets';
            platformService.platform.createWebSocketConnection(data.broker);
        } else {
            platformService.platform = 'widgets';
            platformService.platform.createWebSocketConnection(data.broker);
            yield put(reconnectBrokerError());
        }
    } else {
        yield put(reconnectBrokerError());
    }
}

export function * watchAuthorizeBroker () {
    yield takeLatest(AUTHORIZE_BROKER_REQUEST, authorizeBroker);
}

export function  * watchReconnectBroker () {
    yield takeLatest(RECONNECT_BROKER_REQUEST, reconnectBroker);
}


export const brokersSagas = [
    watchAuthorizeBroker(),
    watchReconnectBroker()
];