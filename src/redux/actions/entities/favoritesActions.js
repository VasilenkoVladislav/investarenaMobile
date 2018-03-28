import { GET_FAVORITES_REQUEST,
    GET_FAVORITES_SUCCESS,
    GET_FAVORITES_ERROR,
    UPDATE_FAVORITE_REQUEST,
    UPDATE_FAVORITE_SUCCESS,
    UPDATE_FAVORITE_ERROR } from '../../constansActions';

export function getFavoritesRequest () {
    return { type: GET_FAVORITES_REQUEST};
}

export function getFavoritesSuccess (data) {
    return { type: GET_FAVORITES_SUCCESS, payload: data };
}

export function getFavoritesError () {
    return { type: GET_FAVORITES_ERROR };
}

export function updateFavoriteRequest (quoteSecurity) {
    return { type: UPDATE_FAVORITE_REQUEST, payload: quoteSecurity };
}

export function updateFavoriteSuccess (quoteSecurity) {
    return { type: UPDATE_FAVORITE_SUCCESS, payload: quoteSecurity };
}

export function updateFavoriteError () {
    return { type: UPDATE_FAVORITE_ERROR };
}
