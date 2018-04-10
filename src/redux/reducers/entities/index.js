import { combineReducers } from 'redux';
import chartsReducer from './chartsReducer';
import commentsReducer from './commentsReducer';
import dealsReducer from './dealsReducer';
import favoritesReducer from './favoritesReducer';
import headersReducer from './headersReducer';
import likesReducer from './likesReducer';
import platformReducer from './platformReducer';
import postsReducer from './postsReducer';
import quotesReducer from './quotesReducer';
import quotesSettingsReducer from './quotesSettingsReducer';
import userReducer from './userReducer';
import usersStatusReducer from './usersStatusReducer';

export default combineReducers({
    charts: chartsReducer,
    comments: commentsReducer,
    deals: dealsReducer,
    favorites: favoritesReducer,
    platform: platformReducer,
    headers: headersReducer,
    likes: likesReducer,
    posts: postsReducer,
    quotes: quotesReducer,
    quotesSettings: quotesSettingsReducer,
    user: userReducer,
    usersStatus: usersStatusReducer
});
