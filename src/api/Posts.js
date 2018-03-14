import Base from './Base';
import config from '../configApi/config';

export default class Posts extends Base {
    getPosts = async (params, headers) => {
        const response = await this.apiClient.get(config.posts.posts, {}, params, headers);
        const data = {};
        if (response.data) {
            data.posts = response.data.posts;
            data.hasMore = response.data.posts.length > 2;
            data.sort = response.data.sort;
            data.settingFeed = response.data.subscriptions_first ? 'subscriptions_first' : '';
        }
        return ({headers: response.headers, data});
    };
    createPost = (data, headers) => {
        return this.apiClient.post(`${config.posts.posts}`, data, headers);
    };
    updatePost = (postId, data, headers) => {
        return this.apiClient.put(`${config.posts.posts}${postId}`, data, headers);
    };
    deletePost = (postId, headers) => {
        return this.apiClient.delete(`${config.posts.posts}${postId}`, headers);
    };
}
