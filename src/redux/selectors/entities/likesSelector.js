import { createSelector } from 'reselect';
// selector
const getLikesState = (state) => state.entities.likes;
// reselect function
export const makeGetLikeState = () => createSelector(
    getLikesState,
    (state, props) => props.likedId,
    (likes, likedId) => likes.byLikedId[likedId] || { likedId, count: 0, liked: false, isLoading: false }
);