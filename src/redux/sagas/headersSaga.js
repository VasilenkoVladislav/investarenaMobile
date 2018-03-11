import { put, call } from 'redux-saga/effects';
import { authTokenFormat } from '../../default/tokenFormat';
import { updateHeaders } from '../actions/entities/headersActions';
import { AsyncStorage } from 'react-native';

export function * updateHeadersClient (headers) {
    if (headers && headers['access-token'] && headers['client'] && headers['uid']) {
        headers = authTokenFormat(headers);
        yield call(AsyncStorage.setItem, 'authHeaders', JSON.stringify(headers));
        yield put(updateHeaders(headers));
    }
}
