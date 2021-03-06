import { AUTHORIZE_BROKER_REQUEST,
    AUTHORIZE_BROKER_SUCCESS,
    AUTHORIZE_BROKER_ERROR,
    REGISTER_BROKER_REQUEST,
    REGISTER_BROKER_SUCCESS,
    REGISTER_BROKER_ERROR,
    FORGOT_PASS_BROKER_REQUEST,
    FORGOT_PASS_BROKER_SUCCESS,
    FORGOT_PASS_BROKER_ERROR,
    CONNECT_PLATFORM_REQUEST,
    CONNECT_PLATFORM_SUCCESS,
    CONNECT_PLATFORM_ERROR,
    UPDATE_USER_STATISTICS,
    SIGN_OUT_SUCCESS } from '../../constansActions';

const initialState = {
    connect: false,
    platformName: 'widgets',
    userStatistics: {},
    userSettings: {},
    isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
    case CONNECT_PLATFORM_REQUEST:
        return { ...state, connect: false, isLoading: true, platformName: 'widgets' };
    case CONNECT_PLATFORM_SUCCESS:
        return { ...state, connect: true, isLoading: false, platformName: action.payload};
    case CONNECT_PLATFORM_ERROR:
        return { ...state, connect: false, isLoading: false, platformName: 'widgets' };
    case UPDATE_USER_STATISTICS:
        return { ...state, userStatistics: action.payload };
    case AUTHORIZE_BROKER_REQUEST:
    case FORGOT_PASS_BROKER_REQUEST:
    case REGISTER_BROKER_REQUEST:
        return { ...state, isLoading: true };
    case AUTHORIZE_BROKER_SUCCESS:
    case AUTHORIZE_BROKER_ERROR:
    case REGISTER_BROKER_SUCCESS:
    case REGISTER_BROKER_ERROR:
    case FORGOT_PASS_BROKER_SUCCESS:
    case FORGOT_PASS_BROKER_ERROR:
        return { ...state, isLoading: false };
    case SIGN_OUT_SUCCESS:
        return initialState;
    default:
        return state;
    }
}
