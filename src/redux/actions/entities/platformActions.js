import { CONNECT_PLATFORM_SUCCESS,
    CONNECT_PLATFORM_ERROR,
    UPDATE_USER_STATISTICS } from '../../constansActions';

export function connectPlatformSuccess (platformName) {
    return { type: CONNECT_PLATFORM_SUCCESS, payload: platformName };
}

export function connectPlatformError (platformName) {
    return { type: CONNECT_PLATFORM_ERROR, payload: platformName };
}

export function updateUserStatistics (balance) {
    return { type: UPDATE_USER_STATISTICS, payload: balance };
}
