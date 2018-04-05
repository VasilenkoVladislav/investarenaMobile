import { call, put, select, takeLatest } from 'redux-saga/es/effects';
import { authorizeBrokerSuccess,
    authorizeBrokerError,
    reconnectBrokerSuccess,
    reconnectBrokerError,
    disconnectBrokerRequest } from '../actions/entities/brokersActions';
import { AUTHORIZE_BROKER_REQUEST,
    RECONNECT_BROKER_REQUEST,
    DISCONNECT_BROKER_REQUEST, } from '../constansActions';
import api from '../../configApi/apiResources';
import { connectPlatformRequest } from '../actions/entities/platformActions';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeaders } from '../actions/entities/headersActions';
import {platformService} from "../../platform/platformService";
import {AsyncStorage} from "react-native";

export function * authorizeBroker ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers, status } = yield call(api.brokers.authorizeBroker, payload, headersForRequest);
    if (data && headers && status) {
        yield put(updateHeaders(headers));
        if (status === 'success') {
            yield put(connectPlatformRequest());
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
            yield put(connectPlatformRequest());
        } else {
            yield put(reconnectBrokerError());
            yield put(disconnectBrokerRequest());
        }
    } else {
        yield put(reconnectBrokerError());
    }
}

export function * disconnectBroker () {
    yield AsyncStorage.multiRemove(['platformName', 'stompUser', 'stompPassword', 'sid', 'umSession', 'websrv']);
    platformService.platform = 'widgets';
    platformService.platform.createWebSocketConnection();
}

export function * watchAuthorizeBroker () {
    yield takeLatest(AUTHORIZE_BROKER_REQUEST, authorizeBroker);
}

export function  * watchReconnectBroker () {
    yield takeLatest(RECONNECT_BROKER_REQUEST, reconnectBroker);
}

export function * watchDisconnectBroker () {
    yield takeLatest(DISCONNECT_BROKER_REQUEST, disconnectBroker)
}

export const brokersSagas = [
    watchAuthorizeBroker(),
    watchReconnectBroker(),
    watchDisconnectBroker()
];