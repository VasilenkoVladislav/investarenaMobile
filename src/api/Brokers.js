import { AsyncStorage } from 'react-native';
import Base from './Base';
import config from '../configApi/config';

export default class Brokers extends Base {
    authorizeBroker = async ({ email, password, brokerName}, headers) => {
        const data = { broker_name: brokerName, email, password };
        const response = await this.apiClient.post(config.brokers.brokerAuthorization, data, headers);
        let status = 'error';
        let message = '';
        if (response.data && response.data.broker) {
            switch (response.data.broker.code) {
            case 1:
                status = 'success';
                await AsyncStorage.multiSet([
                    ['platformName', response.data.broker.broker_name],
                    ['stompUser', response.data.broker.stompUser],
                    ['stompPassword', response.data.broker.stompPassword],
                    ['sid', response.data.broker.sid],
                    ['umSession', response.data.broker.um_session],
                    ['websrv', response.data.broker.websrv || '']
                ]);
                break;
            case 2:
                break;
            default:
            }
        }
        return ({headers: response.headers, error: response.error, data: response.data, status, message});
    };
    reconnectBroker = async ({stompUser, stompPassword, platformName}, headers) => {
        const data = {
            broker_name: platformName,
            stomp_user: stompUser,
            stomp_password: stompPassword
        };
        const response = await this.apiClient.post(config.brokers.reconnectBroker, data, headers);
        let status = 'error';
        let message = '';
        if (response.data && response.data.broker) {
            if (response.data.broker.code === 1) {
                status = 'success';
                await AsyncStorage.multiSet([
                    ['stompUser', response.data.broker.stompUser],
                    ['stompPassword', response.data.broker.stompPassword],
                    ['sid', response.data.broker.sid]
                ]);
            } else {

            }
        }
        return ({headers: response.headers, error: response.error, data: response.data, status, message});
    }
}