import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { authTokenFormat } from '../default/tokenFormat';

export default class ApiClient {
    constructor ({prefix = 'localhost:3000/api/v1'} = {}) {
        this.prefix = prefix;
    }
    get (requestUrl, payload = {}, params, headers={}) {
        return this.request({
            url: `${this.prefix}${requestUrl}`,
            method: 'get',
            params,
            headers
        });
    }
    put (requestUrl, payload = {}, headers) {
        return this.request({
            url: `${this.prefix}${requestUrl}`,
            method: 'put',
            data: payload,
            headers
        });
    }
    post (requestUrl, payload = {}, headers) {
        return this.request({
            url: `${this.prefix}${requestUrl}`,
            method: 'post',
            data: payload,
            headers
        });
    }
    delete (requestUrl, headers) {
        return this.request({
            url: `${this.prefix}${requestUrl}`,
            method: 'delete',
            headers
        });
    }
    async request ({url, method, params = {}, data, headers = {}}) {
        try {
            const response = await axios({method, url, params, data, headers});
            if (response.headers && response.headers['access-token'] && response.headers['client'] && response.headers['uid']) {
                response.headers = authTokenFormat(response.headers);
                await AsyncStorage.setItem('authHeaders', JSON.stringify(response.headers));
            } else {
                response.headers = headers;
            }
            if (response.status >= 200 && response.status < 300) {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }
                return response;
            }
        } catch (error) {
            const response = { error: {} };
            response.error.statusCode = (error && error.response && error.response.status) || 500;
            response.error.status = 'error';
            response.error.toString = () => {
                let result = 'Bad response from server';
                if (error && error.response && error.response.data) {
                    result = error.response.data.errors;
                } else {
                    result = error.message;
                }
                return result;
            };
            return response;
        }
    }
}
