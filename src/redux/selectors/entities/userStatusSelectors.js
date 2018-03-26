import { createSelector } from 'reselect';
import { getCurrentUserIdState } from './userSelectors';

const getUsersStatusState = (state) => state.entities.usersStatus;

export const getUserStatusState = createSelector(
    getUsersStatusState,
    getCurrentUserIdState,
    (state, props) => props.userId,
    (usersStatus, currentUserId, userId) =>
        userId === currentUserId
            ? true
            : (usersStatus[userId] &&usersStatus[userId].online) || false
);
