import { GET_REFRESH_COMMENTS_REQUEST,
    GET_NEXT_COMMENTS_REQUEST,
    CREATE_COMMENT_REQUEST,
    UPDATE_COMMENT_REQUEST,
    DELETE_COMMENT_REQUEST } from '../constansActions';
import { getCommentsSuccess, getCommentsError } from '../actions/entities/commentsActions';
import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '../../configApi/apiResources';
import _ from 'lodash';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeaders } from '../actions/entities/headersActions';
import { updateLikes } from '../actions/entities/likesActions';

export function * getRefreshComments ({payload}) {
    const { commentableId, commentableType } = payload;
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.comments.getComments, commentableId, commentableType, {}, headersForRequest);
    if (data && data.comments && headers) {
        const likes = _.map(data.comments, _.partialRight(_.pick, ['id', 'liked', 'likes_count']));
        yield put(updateHeaders(headers));
        yield put(updateLikes(likes));
        yield put(getCommentsSuccess(data.comments, commentableId, false, data.count));
    } else {
        yield put(getCommentsError());
    }
}

export function * getNextComments () {

}

export function * createComment () {

}

export function * updateComment () {

}

export function * deleteComment () {

}

export function * watchGetRefreshComments () {
    yield takeEvery(GET_REFRESH_COMMENTS_REQUEST, getRefreshComments);
}

export function * watchGetNextComments () {
    yield takeLatest(GET_NEXT_COMMENTS_REQUEST, getNextComments);
}

export function * watchCreateComment () {
    yield takeEvery(CREATE_COMMENT_REQUEST, createComment);
}

export function * watchUpdateComment () {
    yield takeEvery(UPDATE_COMMENT_REQUEST, updateComment);
}

export function * watchDeleteComment () {
    yield takeEvery(DELETE_COMMENT_REQUEST, deleteComment);
}

export const commentsSagas = [
    watchGetRefreshComments(),
    watchGetNextComments(),
    watchCreateComment(),
    watchUpdateComment(),
    watchDeleteComment()
];