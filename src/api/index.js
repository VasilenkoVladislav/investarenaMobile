import ApiClient from './ApiClient';
import Authentications from './Authentications';
import Brokers from './Brokers';
import Comments from './Comments';
import Deals from './Deals';
import Favorites from './Favorites';
import Likes from './Likes';
import Registrations from './Registrations';
import Posts from './Posts';

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix});
    return {
        authentications: new Authentications({apiClient: api}),
        brokers: new Brokers({ apiClient: api }),
        comments: new Comments({apiClient: api}),
        deals: new Deals({apiClient: api}),
        favorites: new Favorites({apiClient: api}),
        likes: new Likes({apiClient: api}),
        registrations: new Registrations({apiClient: api}),
        posts: new Posts({apiClient: api})
    };
}
