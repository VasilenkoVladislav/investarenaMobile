import _ from 'lodash';
import { createSelector } from 'reselect';
// selector
const getPosts = (state) => state.entities.posts;

// reselect function
export const getPostsEntitiesState = createSelector(
    [ getPosts ],
    (posts) => posts.allIds.map(id => posts.entities[id])
);

export const getPostByIdState = createSelector(
    getPosts,
    (state, props) => props.postId,
    (posts, postId) => posts.entities[postId]
);

export const getPostHasMoreState = createSelector(
    getPosts,
    (posts) => posts.hasMore
);

export const getPostsIsLoadingState = createSelector(
    getPosts,
    (posts) => posts.isLoading
);

export const getLastPostCreatedAtState = (state) => {
    const lastPost = _.last(getPostsEntitiesState(state));
    return lastPost ? lastPost.created_at : '';
};