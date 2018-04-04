import { GET_REFRESH_COMMENTS_REQUEST,
    GET_NEXT_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_ERROR,
    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_ERROR,
    UPDATE_COMMENT_REQUEST,
    UPDATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_ERROR,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_ERROR } from '../../constansActions';

export function getRefreshCommentsRequest (commentableId, commentableType) {
    return { type: GET_REFRESH_COMMENTS_REQUEST, payload: { commentableId, commentableType } }
}

export function getNextCommentsRequest (commentableId, commentableType) {
    return { type: GET_NEXT_COMMENTS_REQUEST, payload: { commentableId, commentableType } }
}

export function getCommentsSuccess (data, commentableId, hasMore, count) {
    return { type: GET_COMMENTS_SUCCESS, payload: { data, commentableId, hasMore, count } };
}

export function getCommentsError (commentableId) {
    return { type: GET_COMMENTS_ERROR, payload: commentableId };
}

export function createCommentRequest (data, commentableId, commentableType) {
    return { type: CREATE_COMMENT_REQUEST, payload: { data, commentableId, commentableType } };
}

export function createCommentSuccess (data, commentableId) {
    return { type: CREATE_COMMENT_SUCCESS, payload: { data, commentableId } };
}

export function createCommentError (commentableId) {
    return { type: CREATE_COMMENT_ERROR, payload: commentableId };
}

export function updateCommentRequest (data, commentableId, commentableType) {
    return { type: UPDATE_COMMENT_REQUEST, payload: { data, commentableId, commentableType } };
}

export function updateCommentSuccess (data, commentableId) {
    return { type: UPDATE_COMMENT_SUCCESS, payload: { data, commentableId } };
}

export function updateCommentError (commentableId) {
    return { type: UPDATE_COMMENT_ERROR, payload: commentableId };
}

export function deleteCommentRequest (commentId, commentableId, commentableType) {
    return { type: DELETE_COMMENT_REQUEST, payload: { commentId, commentableId, commentableType } };
}

export function deleteCommentSuccess (commentId, commentableId) {
    return { type: DELETE_COMMENT_SUCCESS, payload: { commentId, commentableId } };
}

export function deleteCommentError (commentableId) {
    return { type: DELETE_COMMENT_ERROR, payload: commentableId };
}
