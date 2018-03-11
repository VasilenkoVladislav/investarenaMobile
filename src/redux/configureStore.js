import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { middleware } from './utils/redux';

export default function () {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({ realtime: true, port: 5678 });
    let store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware, middleware, logger)));
    if (process.env.NODE_ENV === 'production') {
        store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware, middleware));
    } else if (process.env.NODE_ENV === 'development') {
        store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware, middleware, logger)));
    } else if (process.env.NODE_ENV === 'test') {
        store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, middleware, logger)));
    }
    sagaMiddleware.run(rootSaga);
    return store;
}
