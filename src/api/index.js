import ApiClient from './ApiClient';
import Authentications from './Authentications';
import Deals from './Deals';
import Favorites from './Favorites';
import Registrations from './Registrations';
import Posts from './Posts';

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix});
    return {
        authentications: new Authentications({apiClient: api}),
        deals: new Deals({apiClient: api}),
        favorites: new Favorites({apiClient: api}),
        registrations: new Registrations({apiClient: api}),
        posts: new Posts({apiClient: api})
    };
}
