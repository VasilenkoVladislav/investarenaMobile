import { UPDATE_LIKE_SUCCESS, UPDATE_LIKES } from '../../constansActions';

const initialState = { byLikedId: {} };

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_LIKE_SUCCESS:
        return {...state,
            byLikedId: {
                ...state.byLikedId, [action.payload.likedId]: action.payload
            }
        };
    case UPDATE_LIKES:
        return { ...state,
            byLikedId: action.payload.reduce((result, item) => {
                state.byLikedId[item.id] = {
                    likedId: item.id,
                    liked: item.liked,
                    count: item.likes_count
                };
                return state.byLikedId;
            }, state.byLikedId),
        };
    default:
        return state;
    }
}
