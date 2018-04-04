import { UPDATE_QUOTES_SETTINGS,
    AUTHORIZE_BROKER_SUCCESS,
    DISCONNECT_BROKER_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR } from '../../constansActions';

const initialState = { };

export default function (state = initialState, action) {
    switch (action.type) {
    case UPDATE_QUOTES_SETTINGS:
        return {...state, ...action.payload};
    case AUTHORIZE_BROKER_SUCCESS:
    case DISCONNECT_BROKER_SUCCESS:
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_ERROR:
            return initialState;
    default:
        return state;
    }
}
