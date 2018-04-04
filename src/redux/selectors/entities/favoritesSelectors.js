import { createSelector } from 'reselect';
// selector
export const getFavoritesState = (state) => state.entities.favorites;
// reselect function
export const makeIsFavoriteState = () => createSelector(
    getFavoritesState,
    (state, props) => props.quoteSecurity,
    (favorites, quoteSecurity) => favorites.allQuotes.includes(quoteSecurity)
);

export const makeGetFavoriteState = () => createSelector(
    getFavoritesState,
    (state, props) => props.quoteSecurity,
    (favorites, quoteSecurity) => favorites.entities[quoteSecurity]
);