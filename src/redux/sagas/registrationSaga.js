import { put, call, takeLatest } from 'redux-saga/effects';
import { registrationSuccess, registrationError } from '../actions/entities/registrationActions';
import api from '../../configApi/apiAuth';
import { REGISTRATION_REQUEST } from '../constansActions';

export function * registration ({payload}) {
    const { data, headers } = yield call(api.registrations.registration, payload);
    if (data && headers) {
        yield put(registrationSuccess());
    } else {
        yield put(registrationError());
    }
}

export function * watchRegistration () {
    yield takeLatest(REGISTRATION_REQUEST, registration);
}

export const registrationSagas = [
    watchRegistration()
];
