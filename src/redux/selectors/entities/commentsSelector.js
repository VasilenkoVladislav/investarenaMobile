import _ from 'lodash';
import { createSelector } from 'reselect';
// selector
const getCommentsState = (state) => state.entities.comments;
// reselect function
export const makeGetCommentsState = () => createSelector(
    getCommentsState,
    (state, props) => props.commentableId,
    (comments, commentableId) => comments.byCommentableId[commentableId]
        ? comments.byCommentableId[commentableId].comments
        : null
);
export const makeGetHasMoreCommentsState = () => createSelector(
    getCommentsState,
    (state, props) => props.commentableId,
    (comments, commentableId) => comments.byCommentableId[commentableId]
        ? comments.byCommentableId[commentableId].hasMore
        : false
);
export const makeGetIsLoadingCommentsState = () => createSelector(
    getCommentsState,
    (state, props) => props.commentableId,
    (comments, commentableId) => comments.byCommentableId[commentableId]
        ? comments[commentableId].isLoading
        : false
);
export const makeGetCountCommentsState = () => createSelector(
    getCommentsState,
    (state, props) => props.commentableId,
    (comments, commentableId) => comments.byCommentableId[commentableId]
        ? comments[commentableId].count
        : 0
);

export const getLastCommentCreatedAtState = (state, commentableId) => {
    const comments = getCommentsState(state);
    const lastComment = _.first(comments.byCommentableId[commentableId] ? comments[commentableId].comments : null);
    return lastComment ? lastComment.created_at : '';
};

export const getActualSizeCommentsState = (state, commentableId) => {
    const comments = getCommentsState(state);
    return comments.byCommentableId[commentableId]
        ? comments.byCommentableId[commentableId].comments.length
        : 0;
};