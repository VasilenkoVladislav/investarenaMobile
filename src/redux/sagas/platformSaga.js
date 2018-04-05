import { CONNECT_PLATFORM_REQUEST, DISCONNECT_PLATFORM_REQUEST } from '../constansActions';
import { AsyncStorage } from 'react-native';
import { platformService } from '../../platform/platformService';
import { takeLatest} from 'redux-saga/effects';

export function * connectPlatform () {
    const params = {};
    const result = yield AsyncStorage.multiGet(['platformName', 'stompUser', 'stompPassword', 'sid', 'umSession', 'websrv']);
    result.map((result, i, store) => params[store[i][0]] = store[i][1]);
    platformService.platform = params.platformName || 'widgets';
    if (params.platformName === 'umarkets' || params.platformName === 'maximarkets') {
        platformService.platform.createWebSocketConnection(params);
    } else {
        platformService.platform.createWebSocketConnection();
    }
}

export function * disconnectPlatform () {
    yield AsyncStorage.multiRemove(['platformName', 'stompUser', 'stompPassword', 'sid', 'umSession', 'websrv']);
    platformService.platform = 'widgets';
}

export function * watchConnectPlatform () {
    yield takeLatest(CONNECT_PLATFORM_REQUEST, connectPlatform)
}

export function * watchDisconnectPlatform () {
    yield takeLatest(DISCONNECT_PLATFORM_REQUEST, disconnectPlatform)
}

export const platformSagas = [
    watchConnectPlatform(),
    watchDisconnectPlatform()
];