import { SHOW_MODAL, HIDE_MODAL } from '../../constansActions';

export function showModal (type, data = {}) {
    return { type: SHOW_MODAL, payload: { type, data } };
}

export function hideModal (type) {
    return { type: HIDE_MODAL, payload: { type } };
}