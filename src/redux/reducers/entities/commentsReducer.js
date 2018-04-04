import { SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR } from '../../constansActions';

const initialState = { byCommentableId: {} };

export default function (state = initialState, action) {
    switch (action.type) {
    case SIGN_IN_SUCCESS:
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_ERROR:
        return initialState;
    default:
        return state;
    }
}
