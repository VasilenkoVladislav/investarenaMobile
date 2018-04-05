import { CONNECT_PLATFORM_REQUEST,
    CONNECT_PLATFORM_SUCCESS,
    CONNECT_PLATFORM_ERROR,
    DISCONNECT_PLATFORM_REQUEST,
    DISCONNECT_PLATFORM_SUCCESS,
    DISCONNECT_PLATFORM_ERROR,
    UPDATE_USER_STATISTICS } from '../../constansActions';

export function connectPlatformRequest () {
    return { type: CONNECT_PLATFORM_REQUEST };
}

export function connectPlatformSuccess (platformName) {
    return { type: CONNECT_PLATFORM_SUCCESS, payload: platformName };
}

export function connectPlatformError (platformName) {
    return { type: CONNECT_PLATFORM_ERROR, payload: platformName };
}

export function disconnectPlatformRequest (platformName) {
    return { type: DISCONNECT_PLATFORM_REQUEST, payload: platformName };
}

export function disconnectPlatformSuccess (platformName) {
    return { type: DISCONNECT_PLATFORM_SUCCESS, payload: platformName };
}

export function disconnectPlatformError (platformName) {
    return { type: DISCONNECT_PLATFORM_ERROR, payload: platformName };
}
export function updateUserStatistics (balance) {
    return { type: UPDATE_USER_STATISTICS, payload: balance };
}
