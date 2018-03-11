import Base from './Base';
import config from '../configApi/config';

export default class Authentications extends Base {
    validateToken = (headers) => {
        return this.apiClient.get(config.authentication.validateToken, {}, {}, headers);
    };
    oAuthSignIn = (provider, data) => {
        return this.apiClient.post(`${config.authentication.oAuthSignIn}${provider}`, data);
    };
    signIn = (email, password) => {
        return this.apiClient.post(config.authentication.signIn, {email, password});
    };
    signOut = (headers) => {
        return this.apiClient.delete(config.authentication.signOut, headers);
    };
}
