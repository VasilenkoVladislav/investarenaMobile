import { UPDATE_USER_STATUS } from '../../constansActions';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
    case UPDATE_USER_STATUS:
        return {...state,
            [action.payload.userId]: {
                    online: action.payload.status.online,
                    lastedAt: action.payload.status.lasted_at
                }
        };
    default:
        return state;
    }
}
