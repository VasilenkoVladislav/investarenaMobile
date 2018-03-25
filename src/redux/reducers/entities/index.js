import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import headersReducer from './headersReducer';
import userReducer from './userReducer';
import postsReducer from './postsReducer';

export default combineReducers({
    favorites: favoritesReducer,
    headers: headersReducer,
    user: userReducer,
    posts: postsReducer
});
