import { GET_NEXT_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_ERROR,
    UPDATE_COMMENT_REQUEST,
    UPDATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_ERROR,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_ERROR,
    DELETE_POST_SUCCESS,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR } from '../../constansActions';

const initialState = { byCommentableId: {} };

export default function (state = initialState, action) {
    switch (action.type) {
    case GET_COMMENTS_SUCCESS:
        return getComments(state, action);
    case SIGN_IN_SUCCESS:
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_ERROR:
        return initialState;
    default:
        return state;
    }
}
function getComments (state, action) {
    if (state.byCommentableId[action.payload.commentableId]) {
        return {...state,
            byCommentableId: {...state.byCommentableId,
                [action.payload.commentableId]: {...state.byCommentableId[action.payload.commentableId],
                    entities: [...action.payload.data, ...state.byCommentableId[action.payload.commentableId].entities],
                    hasMore: action.payload.hasMore,
                    count: action.payload.count,
                    isLoading: false
                }
            }
        }
    } else {
        return {...state,
            byCommentableId: {...state.byCommentableId,
                [action.payload.commentableId]: {
                    entities: action.payload.data,
                    hasMore: action.payload.hasMore,
                    count: action.payload.count,
                    isLoading: false
                }
            }
        };
    }
}

