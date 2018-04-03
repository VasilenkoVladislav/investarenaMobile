import { UPDATE_LIKE_REQUEST } from '../constansActions';
import { updateLikeSuccess, updateLikeError,} from '../actions/entities/likesActions';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import api from '../../configApi/apiResources';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeaders } from '../actions/entities/headersActions';

export function * updateLike ({payload}) {
    const { likedId, likedType } = payload;
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.likes.updateLike, likedId, likedType, headersForRequest);
    if (data && headers) {
        yield put(updateHeaders(headers));
        yield put(updateLikeSuccess({likedId, likedType, count: data.count_likes, liked: data.liked}));
    } else {
        yield put(updateLikeError());
    }
}

export function * watchUpdateLike() {
    yield takeEvery(UPDATE_LIKE_REQUEST, updateLike);
}

export const likesSagas = [
    watchUpdateLike()
];