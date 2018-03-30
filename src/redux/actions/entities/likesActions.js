import { UPDATE_LIKE_REQUEST,
    UPDATE_LIKE_SUCCESS,
    UPDATE_LIKE_ERROR,
    UPDATE_LIKES } from '../../constansActions';

export function updateLikeRequest (likedId, likedType) {
    return { type: UPDATE_LIKE_REQUEST, payload: { likedId, likedType } };
}

export function updateLikeSuccess (data) {
    return { type: UPDATE_LIKE_SUCCESS, payload: data };
}

export function updateLikeError () {
    return { type: UPDATE_LIKE_ERROR };
}

export function updateLikes (data) {
    return { type: UPDATE_LIKES, payload: data };
}