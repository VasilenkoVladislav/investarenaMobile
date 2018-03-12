import { put, call, takeLatest, takeEvery ,select } from 'redux-saga/effects';
import { VALIDATE_TOKEN_REQUEST, OAUTHENTICATE_REQUEST, SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from '../constansActions';
import { signInSuccess, signInError, signOutSuccess, signOutError, validateTokenError } from '../actions/entities/authenticateActions';
import { LoginManager, AccessToken }  from 'react-native-fbsdk';
import api from '../../configApi/apiAuth';
import { delay } from 'redux-saga';
import { getItemAsyncStorage } from '../utils/asyncStorageHelper';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { GoogleSignin } from 'react-native-google-signin';
import { updateHeadersClient } from './headersSaga';
import { replace } from '../actions/nav';


export function * validateToken () {
    const { result } = yield call(getItemAsyncStorage, 'authHeaders', false);
    if (result) {
        const { data, headers } = yield call(api.authentications.validateToken, result);
        if (data && headers) {
            yield call(updateHeadersClient, headers);
            yield put(signInSuccess(data));
            yield put(replace('Main'))
        } else {
            yield put(validateTokenError());
            yield put(replace('Login'))
        }
    } else {
        yield put(validateTokenError());
        yield put(replace('Login'))
    }
}

export function * oAuthSignIn ({payload}) {
    try {
        yield GoogleSignin.hasPlayServices({ autoResolve: true });
        yield GoogleSignin.configure({
            webClientId: '458481598101-96tr56qjegir86pdcu2lfk3q7sb2pl4m.apps.googleusercontent.com',
            offlineAccess: false
        });
        const user = yield GoogleSignin.signIn();
        console.log(user);
    } catch (err) {
        console.log(err);
    }

    // let FBAccessToken = yield call(AccessToken.getCurrentAccessToken);
    // console.log(FBAccessToken);
    // if (!FBAccessToken) {
    //     const result = yield call(LoginManager.logInWithReadPermissions, ['email, public_profile']);
    //     if (result && !result.isCancelled) {
    //         FBAccessToken = yield call(AccessToken.getCurrentAccessToken);
    //     }
    // }
    // if (FBAccessToken && FBAccessToken.accessToken) {
    //     const { data, headers } = yield call(api.authentications.oAuthSignIn, payload, { access_token: FBAccessToken.accessToken });
    //     if (data && headers) {
    //         yield call(updateHeadersClient, headers);
    //         yield put(signInSuccess(data));
    //         yield put(replace('Main'))
    //     } else {
    //         yield put(signInError());
    //     }
    // }
}

export function * signIn ({payload}) {
    yield call(delay, 1500);
    const { email, password } = payload;
    const { data, headers } = yield call(api.authentications.signIn, email, password);
    if (data && headers) {
        yield call(updateHeadersClient, headers);
        yield put(signInSuccess(data));
        yield put(replace('Main'))
    } else {
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
