import { GET_POST_DEALS_REQUEST,
    CREATE_OPEN_DEAL_REQUEST } from '../constansActions';
import { getPostDealsSuccess, getPostDealsError } from '../actions/entities/dealsActions';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import api from '../../configApi/apiResources';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeaders } from '../actions/entities/headersActions';

export function * getPostDeals ({payload}) {
    const headersForRequest = yield select(getHeadersState);
    const { data, headers } = yield call(api.deals.getPostDeals, {post_id: payload}, headersForRequest);
    if (data && data.deals && headers) {
        yield put(updateHeaders(headers));
        yield put(getPostDealsSuccess(payload, data.deals));
    } else {
        yield put(getPostDealsError());
    }
}

export function * createOpenDeal () {

}

export function * watchGetPostDeals () {
    yield takeEvery(GET_POST_DEALS_REQUEST, getPostDeals);
}

export function * watchCreateOpenDeal () {
    yield takeEvery(CREATE_OPEN_DEAL_REQUEST, createOpenDeal);
}

export const dealsSagas = [
    watchGetPostDeals(),
    watchCreateOpenDeal()
];