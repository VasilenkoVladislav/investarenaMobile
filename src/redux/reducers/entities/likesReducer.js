import { UPDATE_LIKE_SUCCESS,
    UPDATE_LIKES,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR } from '../../constansActions';

const initialState = { byLikedId: {} };

export default function (state = initialState, action) {
    switch (action.type) {
    case UPDATE_LIKE_SUCCESS:
        return {...state,
            byLikedId: { ...state.byLikedId,
                [action.payload.likedId]: action.payload
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
    case SIGN_IN_SUCCESS:
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_ERROR:
        return initialState;
    default:
        return state;
    }
}
