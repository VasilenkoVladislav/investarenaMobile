import { SHOW_MODAL, HIDE_MODAL } from '../../constansActions';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
    case SHOW_MODAL:
        return [{ type: action.payload.type, data: action.payload.data }, ...state];
    case HIDE_MODAL:
        return state.filter(modal => modal.type !== action.payload.type);
    default:
        return state;
    }
}
