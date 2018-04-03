import { combineReducers } from 'redux';
import entitiesReducers from './entities';
import uiReducers from './ui';
import navReducer from './nav';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const entitiesConfig = {
    key: 'entities',
    storage: storage,
    whitelist: ['user', 'posts', 'headers', 'likes', 'favorites']
};

export default combineReducers({
    entities: persistReducer(entitiesConfig, entitiesReducers),
    ui: uiReducers,
    nav: navReducer
});
