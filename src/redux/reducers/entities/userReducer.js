import { VALIDATE_TOKEN_REQUEST,
    VALIDATE_TOKEN_ERROR,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR } from '../../constansActions';

const initialState = {
    info: {},
    isLoading: false,
    isSignIn: false
};

export default function (state = initialState, action) {
    switch (action.type) {
    case VALIDATE_TOKEN_REQUEST:
    case SIGN_IN_REQUEST:
    case REGISTRATION_REQUEST:
        return { ...state, isLoading: true };
    case SIGN_IN_SUCCESS:
        return { ...state, info: action.payload, isSignIn: true, isLoading: false };
    case VALIDATE_TOKEN_ERROR:
    case SIGN_IN_ERROR:
    case REGISTRATION_ERROR:
    case REGISTRATION_SUCCESS:
        return { ...state, isLoading: false };
    default:
        return state;
    }
}
