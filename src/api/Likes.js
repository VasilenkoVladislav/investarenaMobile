import Base from './Base';
import config from '../configApi/config';

export default class Likes extends Base {
    updateLike = (likedId, likedType, headers) => {
        return this.apiClient.post(`${this.scope(likedType)}${likedId}${config.likes.updateLike}`, {}, headers);
    };
    getLikeNames = (elementId, likedType, headers) => {
        return this.apiClient.post(`${this.scope(likedType)}${elementId}${config.likes.getLikesNames}`, {}, headers);
    };
    scope = (likedType) => {
        return likedType === 'Post' ? config.posts.posts : config.comments.commentsScope;
    };
}
