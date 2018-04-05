import { AUTHORIZE_BROKER_REQUEST,
    AUTHORIZE_BROKER_SUCCESS,
    AUTHORIZE_BROKER_ERROR,
    RECONNECT_BROKER_REQUEST,
    RECONNECT_BROKER_SUCCESS,
    RECONNECT_BROKER_ERROR,
    DISCONNECT_BROKER_REQUEST } from '../../constansActions';

export function authorizeBrokerRequest (email, password, brokerName) {
    return { type: AUTHORIZE_BROKER_REQUEST, payload: { email, password, brokerName } }
}

export function authorizeBrokerSuccess (brokerName) {
    return { type: AUTHORIZE_BROKER_SUCCESS, payload: brokerName }
}

export function authorizeBrokerError (brokerName) {
    return { type: AUTHORIZE_BROKER_ERROR, payload: brokerName }
}

export function reconnectBrokerRequest (stompUser, stompPassword, platformName) {
    return { type: RECONNECT_BROKER_REQUEST, payload: { stompUser, stompPassword, platformName } }
}

export function reconnectBrokerSuccess (brokerName) {
    return { type: RECONNECT_BROKER_SUCCESS, payload: brokerName }
}

export function reconnectBrokerError (brokerName) {
    return { type: RECONNECT_BROKER_ERROR, payload: brokerName }
}

export function disconnectBrokerRequest () {
    return { type: DISCONNECT_BROKER_REQUEST }
}