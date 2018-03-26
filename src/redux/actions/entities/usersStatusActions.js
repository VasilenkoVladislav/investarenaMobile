import { UPDATE_USER_STATUS } from '../../constansActions';

export function updateUserStatus (userId, status) {
    return { type: UPDATE_USER_STATUS, payload: { userId, status } };
}
