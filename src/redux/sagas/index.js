import { all } from 'redux-saga/effects';
import { authSagas } from './authenticateSaga';
import { registrationSagas } from './registrationSaga';
import { postsSagas } from './postsSaga';

export default function * rootSaga () {
    yield all([
        ...authSagas,
        ...registrationSagas,
        ...postsSagas
    ]);
}
