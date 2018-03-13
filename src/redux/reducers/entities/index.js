import { combineReducers } from 'redux';
import headersReducer from './headersReducer';
import userReducer from './userReducer';
import postsReducer from './postsReducer';

export default combineReducers({
    user: userReducer,
    headers: headersReducer,
    posts: postsReducer
});
