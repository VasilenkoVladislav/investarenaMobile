import { all } from 'redux-saga/effects';
import { authSagas } from './authenticateSaga';
import { registrationSagas } from './registrationSaga';
import { platformSagas } from './platformSaga';
import { postsSagas } from './postsSaga';

export default function * rootSaga () {
    yield all([
        ...authSagas,
        ...registrationSagas,
        ...platformSagas,
        ...postsSagas
    ]);
}
