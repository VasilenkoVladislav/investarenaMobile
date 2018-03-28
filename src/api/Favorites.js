import Base from './Base';
import config from '../configApi/config';

export default class Favorites extends Base {
    getFavorites = (headers) => {
        return this.apiClient.get(`${config.favorites.favorites}`, {}, {}, headers);
    };
    updateFavorite = (quoteSecurity, headers) => {
        return this.apiClient.put(`${config.favorites.favorites}`, {quote: quoteSecurity}, headers);
    };
}
