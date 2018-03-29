import { GET_REFRESH_POSTS_REQUEST,
    GET_NEXT_POSTS_REQUEST,
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
import { put, call, takeEvery, takeLatest, select } from 'redux-saga/effects';
import api from '../../configApi/apiResources';
import _ from 'lodash';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { getLastPostCreatedAtState } from '../selectors/entities/postsSelectors';
import { updateHeaders } from '../actions/entities/headersActions';
import { updateUsersStatus } from '../actions/entities/usersStatusActions';

export function * getRefreshPosts () {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.posts.getPosts, {}, headersForRequest);
    if (data && data.posts && headers) {
        const usersStatus = _.map(data.posts, _.partialRight(_.pick, ['user_id', 'status_user']));
        yield put(updateHeaders(headers));
        yield put(updateUsersStatus(usersStatus));
        yield put(getPostsSuccess(data));
    } else {
        yield put(getPostsError());
    }
}

export function * getNextPosts () {
    const headersForRequest = yield select(getHeadersState);
    const lastCreateAt = yield select(getLastPostCreatedAtState);
    const params = { last_created_at: lastCreateAt };
    const { data, headers } = yield call(api.posts.getPosts, params, headersForRequest);
    if (data && data.posts && headers) {
        const usersStatus = _.map(data.posts, _.partialRight(_.pick, ['user_id', 'status_user']));
        yield put(updateHeaders(headers));
        yield put(updateUsersStatus(usersStatus));
        yield put(getPostsSuccess(data));
    } else {
        yield put(getPostsError());
    }
}

export function * createPost ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.posts.createPost, payload.data, headersForRequest);
    if (data && data.post && headers) {
        yield put(updateHeaders(headers));
        yield put(createPostSuccess(payload.clientPostId, data.post));
    } else {
        yield put(createPostError());
    }
}

export function * updatePost ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.posts.updatePost, payload, headersForRequest);
    if (data && data.post && headers) {
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

export function * watchGetRefreshPosts () {
    yield takeEvery(GET_REFRESH_POSTS_REQUEST, getRefreshPosts);
}

export function * watchGetNextPosts () {
    yield takeLatest(GET_NEXT_POSTS_REQUEST, getNextPosts);
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
    watchGetRefreshPosts(),
    watchGetNextPosts(),
    watchCreatePost(),
    watchUpdatePost(),
    watchDeletePost()
];
