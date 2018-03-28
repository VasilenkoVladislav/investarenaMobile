import { GET_FAVORITES_REQUEST,
    UPDATE_FAVORITE_REQUEST } from '../constansActions';
import { getFavoritesSuccess,
    getFavoritesError,
    updateFavoriteSuccess,
    updateFavoriteError } from '../actions/entities/favoritesActions';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import api from '../../configApi/apiResources';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeaders } from '../actions/entities/headersActions';

export function * getFavorites () {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.favorites.getFavorites, headersForRequest);
    if (data && data.favorites && headers) {
        yield put(updateHeaders(headers));
        yield put(getFavoritesSuccess(data.favorites));
    } else {
        yield put(getFavoritesError());
    }
}

export function * updateFavorite ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { headers } = yield call(api.favorites.updateFavorite, payload, headersForRequest);
    if (headers) {
        yield put(updateHeaders(headers));
        yield put(updateFavoriteSuccess(payload));
    } else {
        yield put(updateFavoriteError());
    }
}

export function * watchGetFavorites() {
    yield takeEvery(GET_FAVORITES_REQUEST, getFavorites);
}

export function * watchUpdateFavorites() {
    yield takeEvery(UPDATE_FAVORITE_REQUEST, updateFavorite);
}

export const favoritesSagas = [
    watchGetFavorites(),
    watchUpdateFavorites()
];