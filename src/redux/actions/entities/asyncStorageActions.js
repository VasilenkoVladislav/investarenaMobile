import { SET_ITEM_ASYNC_STORAGE } from '../../constansActions';

export function setItemAsyncStorage (name) {
    return { type: SET_ITEM_ASYNC_STORAGE, payload: name };
}