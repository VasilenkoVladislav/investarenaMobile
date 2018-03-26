import _ from 'lodash';
import { createSelector } from 'reselect';
// selector
const getPostsState = (state) => state.entities.posts;

// reselect function
export const getPostsEntitiesState = createSelector(
    getPostsState,
    (posts) => {
        const unConfirmedPosts = posts.unConfirmedIds.map(id => posts.unConfirmed[id]);
        const confirmedPosts = posts.allIds.map(id => posts.entities[id]);
        return unConfirmedPosts.concat(confirmedPosts)
    }
);

export const getPostByIdState = createSelector(
    getPostsState,
    (state, props) => props.postId,
    (posts, postId) => posts.entities[postId]
);

export const getPostHasMoreState = createSelector(
    getPostsState,
    (posts) => posts.hasMore
);

export const getPostsIsLoadingState = createSelector(
    getPostsState,
    (posts) => posts.isLoading
);

export const getLastPostCreatedAtState = (state) => {
    const lastPost = _.last(getPostsEntitiesState(state));
    return lastPost ? lastPost.created_at : '';
};