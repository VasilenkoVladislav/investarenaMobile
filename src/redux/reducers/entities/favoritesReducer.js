import { GET_FAVORITES_SUCCESS,
    UPDATE_FAVORITE_SUCCESS,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR } from '../../constansActions';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
    case GET_FAVORITES_SUCCESS:
        return [...action.payload];
    case UPDATE_FAVORITE_SUCCESS:
        if (state.includes(action.payload)) {
            return state.filter(favorites => favorites !== action.payload);
        } else {
            return [...state, action.payload];
        }
    case SIGN_IN_SUCCESS:
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_ERROR:
        return initialState;
    default:
        return state;
    }
}
