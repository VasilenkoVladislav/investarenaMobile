import { GET_POST_DEALS_REQUEST,
    GET_POST_DEALS_SUCCESS,
    GET_POST_DEALS_ERROR } from '../../constansActions';

export function getPostDealsRequest (postId) {
    return { type: GET_POST_DEALS_REQUEST, payload: postId };
}

export function getPostDealsSuccess (data) {
    return { type: GET_POST_DEALS_SUCCESS, payload: data };
}

export function getPostDealsError () {
    return { type: GET_POST_DEALS_ERROR };
}