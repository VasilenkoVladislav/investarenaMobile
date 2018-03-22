import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { reactNavigationMiddleware } from './utils/reactNavigation';

export default function () {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
    const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware, reactNavigationMiddleware, logger)));
    sagaMiddleware.run(rootSaga);
    return store;
}
