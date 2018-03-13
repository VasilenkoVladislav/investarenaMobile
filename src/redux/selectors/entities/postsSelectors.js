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
