import Base from './Base';
import config from '../configApi/config';

export default class Deals extends Base {
    getPostDeals (params, headers) {
        return this.apiClient.get(config.deals.deals, {}, params, headers);
    }
    createOpenDeal (data, headers) {
        return this.apiClient.post(`${config.deals.deals}`, data, headers);
    }
    getLastClosedDeal (params, headers) {
        return this.apiClient.get(`${config.deals.lastClosedDeals}`, {}, params, headers);
    }
    updateClosedDealsForStatistics (data, headers) {
        return this.apiClient.post(`${config.deals.createClosedDeals}`, data, headers);
    }
}
