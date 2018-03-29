import { UPDATE_USERS_STATUS } from '../../constansActions';

export function updateUsersStatus (data) {
    return { type: UPDATE_USERS_STATUS, payload: data };
}
