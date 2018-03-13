import { GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_ERROR,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR } from '../../constansActions';

export function getPostsRequest () {
    return { type: GET_POSTS_REQUEST };
}

export function getPostsSuccess (data) {
    return { type: GET_POSTS_SUCCESS, payload: data };
}

export function getPostsError () {
    return { type: GET_POSTS_ERROR };
}

export function createPostRequest (data) {
    return { type: CREATE_POST_REQUEST, payload: data };
}

export function createPostSuccess (data) {
    return { type: CREATE_POST_SUCCESS, payload: data };
}

export function createPostError () {
    return { type: CREATE_POST_ERROR };
}

export function updatePostRequest (postId, data) {
    return { type: UPDATE_POST_REQUEST, payload: {postId, data} };
}

export function updatePostSuccess (data) {
    return { type: UPDATE_POST_SUCCESS, payload: data };
}

export function updatePostError () {
    return { type: UPDATE_POST_ERROR };
}

export function deletePostRequest (postId) {
    return { type: DELETE_POST_REQUEST, payload: postId };
}

export function deletePostSuccess (postId) {
    return { type: DELETE_POST_SUCCESS, payload: postId };
}

export function deletePostError () {
    return { type: DELETE_POST_ERROR };
}
