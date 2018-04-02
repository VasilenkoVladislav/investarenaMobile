import { put, call, takeLatest, takeEvery ,select } from 'redux-saga/effects';
import { VALIDATE_TOKEN_REQUEST, OAUTHENTICATE_REQUEST, SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from '../constansActions';
import { signInSuccess, signInError, signOutSuccess, signOutError, validateTokenError } from '../actions/entities/authenticateActions';
import { Alert, NetInfo } from 'react-native';
import api from '../../configApi/apiAuth';
import { connectPlatformRequest } from '../actions/entities/platformActions';
import { getItemAsyncStorage } from '../utils/asyncStorageHelper';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { oAuth } from '../../oAuth';
import { updateHeaders } from '../actions/entities/headersActions';
import { push } from '../actions/nav';

export function * validateToken () {
    const { result } = yield call(getItemAsyncStorage, 'authHeaders', true);
    if (result) {
        const { type } = yield call(NetInfo.getConnectionInfo);
        const { data, headers } = yield call(api.authentications.validateToken, result);
        if (data && headers) {
            yield put(updateHeaders(headers));
            yield put(signInSuccess(data));
            yield put(connectPlatformRequest());
            yield put(push('App'));
        } else if (type === 'none'){
            yield put(signInSuccess(data));
            yield put(push('App'));
        } else {
            yield put(validateTokenError());
            yield put(push('Auth'));
        }
    } else {
        yield put(validateTokenError());
        yield put(push('Auth'));
    }
}

export function * oAuthSignIn ({payload}) {
    const { accessToken } = yield oAuth.getAccessToken(payload);
    if (accessToken) {
        const { data, headers, error } = yield call(api.authentications.oAuthSignIn, payload, { access_token: accessToken });
        if (data && headers) {
            yield put(updateHeaders(headers));
            yield put(signInSuccess(data));
            yield put(connectPlatformRequest());
            yield put(push('App'));
        } else {
            Alert.alert('Error', error.message);
            yield put(signInError());
        }
    }
}

export function * signIn ({payload}) {
    const { email, password } = payload;
    const { data, headers, error } = yield call(api.authentications.signIn, email, password);
    if (data && headers) {
        yield put(updateHeaders(headers));
        yield put(signInSuccess(data));
        yield put(connectPlatformRequest());
        yield put(push('App'));
    } else {
        Alert.alert('Invalid login or password', error.message);
        yield put(signInError());
    }
}

export function * signOut () {
    const headers = yield select(getHeadersState);
    const { error } = yield call(api.authentications.signOut, headers);
    if (!error) {
        yield put(signOutSuccess());
    } else {
        yield put(signOutError());
    }
}

export function * watchValidateToken () {
    yield takeEvery(VALIDATE_TOKEN_REQUEST, validateToken);
}

export function * watchOAuthSignIn () {
    yield takeLatest(OAUTHENTICATE_REQUEST, oAuthSignIn);
}

export function * watchSignIn () {
    yield takeLatest(SIGN_IN_REQUEST, signIn);
}

export function * watchSignOut () {
    yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

export const authSagas = [
    watchValidateToken(),
    watchOAuthSignIn(),
    watchSignIn(),
    watchSignOut()
];
