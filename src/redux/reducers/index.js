import { combineReducers } from 'redux';
import entitiesReducers from './entities';
import uiReducers from './ui';
import navReducer from './nav';

export default combineReducers({
    entities: entitiesReducers,
    ui: uiReducers,
    nav: navReducer
});
