import { all } from 'redux-saga/effects';
import { authSagas } from './authenticateSaga';
import { commentsSagas } from './commentsSaga';
import { dealsSagas } from './dealsSaga';
import { favoritesSagas } from './favoritesSaga';
import { likesSagas } from './likesSaga';
import { registrationSagas } from './registrationSaga';
import { platformSagas } from './platformSaga';
import { postsSagas } from './postsSaga';

export default function * rootSaga () {
    yield all([
        ...authSagas,
        ...commentsSagas,
        ...dealsSagas,
        ...favoritesSagas,
        ...likesSagas,
        ...registrationSagas,
        ...platformSagas,
        ...postsSagas
    ]);
}
