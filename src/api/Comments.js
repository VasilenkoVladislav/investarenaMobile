import Base from './Base';
import config from '../configApi/config';

export default class Comments extends Base {
    getComments = (commentableId, commentableType, params, headers) => {
        const scope = this.scope(commentableType);
        return this.apiClient.get(`${scope}${commentableId}${config.comments.comments}`, {}, params, headers);
    };
    createComment = (commentableId, commentableType, data, headers) => {
        const scope = this.scope(commentableType);
        return this.apiClient.post(`${scope}${commentableId}${config.comments.comments}`, data, headers);
    };
    updateComment = (commentableId, commentableType, commentId, data, headers) => {
        const scope = this.scope(commentableType);
        return this.apiClient.put(`${scope}${commentableId}${config.comments.comments}${commentId}`, data, headers);
    };
    deleteComment = (commentableId, commentableType, commentId, headers) => {
        const scope = this.scope(commentableType);
        return this.apiClient.delete(`${scope}${commentableId}${config.comments.comments}${commentId}`, headers);
    };
    scope = (commentableType) => {
        return commentableType === 'Post' ? config.posts.posts : config.comments.commentsScope;
    };
}
