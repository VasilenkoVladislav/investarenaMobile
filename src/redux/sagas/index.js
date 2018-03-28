import { all } from 'redux-saga/effects';
import { authSagas } from './authenticateSaga';
import { dealsSagas } from './dealsSaga';
import { favoritesSagas } from './favoritesSaga';
import { registrationSagas } from './registrationSaga';
import { platformSagas } from './platformSaga';
import { postsSagas } from './postsSaga';

export default function * rootSaga () {
    yield all([
        ...authSagas,
        ...dealsSagas,
        ...favoritesSagas,
        ...registrationSagas,
        ...platformSagas,
        ...postsSagas
    ]);
}
