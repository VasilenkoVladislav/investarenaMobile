import { UPDATE_LIKE_SUCCESS, UPDATE_LIKES } from '../../constansActions';

const initialState = { byLikedId: {} };

export default function (state = initialState, action) {
    switch (action.type) {
    case UPDATE_LIKE_SUCCESS:
        return {...state, };
    case UPDATE_LIKES:
        return { ...state,
            byLikedId: action.payload.reduce((result, item) => {
                state.byLikedId[item.likedId] = item;
                return state.byLikedId;
            }, state.byLikedId),
        };
    default:
        return state;
    }
}
