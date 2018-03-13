import { GET_POSTS_REQUEST,
    CREATE_POST_REQUEST,
    UPDATE_POST_REQUEST,
    DELETE_POST_REQUEST } from '../constansActions';
import { getPostsSuccess,
    getPostsError,
    createPostSuccess,
    createPostError,
    updatePostSuccess,
    updatePostError,
    deletePostSuccess,
    deletePostError } from '../actions/entities/postsActions';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import api from '../../configApi/apiResources';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeaders } from '../actions/entities/headersActions';

export function * getPosts () {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.posts.getPosts, headersForRequest);
    if (data && headers) {
        yield put(updateHeaders(headers));
        yield put(getPostsSuccess(data));
    } else {
        yield put(getPostsError());
    }
}

export function * createPost ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.posts.createPost, payload, headersForRequest);
    if (data && headers) {
        yield put(updateHeaders(headers));
        yield put(createPostSuccess(data.post));
    } else {
        yield put(createPostError());
    }
}

export function * updatePost ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.posts.updatePost, payload, headersForRequest);
    if (data && headers) {
        yield put(updateHeaders(headers));
        yield put(updatePostSuccess(data.post));
    } else {
        yield put(updatePostError());
    }
}

export function * deletePost ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { headers, error } = yield call(api.posts.deletePost, payload, headersForRequest);
    if (headers && !error) {
        yield put(updateHeaders(headers));
        yield put(deletePostSuccess(payload));
    } else {
        yield put(deletePostError());
    }
}

export function * watchGetPosts () {
    yield takeEvery(GET_POSTS_REQUEST, getPosts);
}

export function * watchCreatePost () {
    yield takeEvery(CREATE_POST_REQUEST, createPost);
}

export function * watchUpdatePost () {
    yield takeEvery(UPDATE_POST_REQUEST, updatePost);
}

export function * watchDeletePost () {
    yield takeEvery(DELETE_POST_REQUEST, deletePost);
}

export const postsSagas = [
    watchGetPosts(),
    watchCreatePost(),
    watchUpdatePost(),
    watchDeletePost()
];
