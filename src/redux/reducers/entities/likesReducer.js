import { UPDATE_LIKE_REQUEST,
    UPDATE_LIKE_ERROR,
    UPDATE_LIKE_SUCCESS,
    UPDATE_LIKES,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR,
    DELETE_POST_SUCCESS } from '../../constansActions';

const initialState = { byLikedId: {} };

export default function (state = initialState, action) {
    switch (action.type) {
    case UPDATE_LIKE_REQUEST:
        return {...state,
            byLikedId: { ...state.byLikedId,
                [action.payload.likedId]: { ...state.byLikedId[action.payload.likedId],
                    isLoading: true
                }
            }
        };
    case UPDATE_LIKE_SUCCESS:
        return {...state,
            byLikedId: { ...state.byLikedId,
                [action.payload.likedId]: {...action.payload,
                    isLoading: false
                }
            }
        };
    case UPDATE_LIKE_ERROR:
        return {...state,
            byLikedId: { ...state.byLikedId,
                [action.payload.likedId]: { ...state.byLikedId[action.payload.likedId],
                    isLoading: false
                }
            }
        };
    case UPDATE_LIKES:
        return { ...state,
            byLikedId: action.payload.reduce((result, item) => {
                state.byLikedId[item.id] = {
                    likedId: item.id,
                    liked: item.liked,
                    count: item.likes_count,
                    isLoading: false
                };
                return state.byLikedId;
            }, state.byLikedId),
        };
    case DELETE_POST_SUCCESS:
        return {...state, byLikedId: _.omit(state.byLikedId, action.payload)};
    case SIGN_IN_SUCCESS:
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_ERROR:
        return initialState;
    default:
        return state;
    }
}
