import { GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    CREATE_POST_SUCCESS,
    UPDATE_POST_SUCCESS,
    DELETE_POST_SUCCESS,
    SIGN_OUT_SUCCESS } from '../../constansActions';
import _ from 'lodash';

const initialState = {
    entities: {},
    allIds: [],
    isLoading: false,
    hasMore: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return { ...state, isLoading: true };
        case GET_POSTS_SUCCESS:
            return { ...state,
                entities: {...state.entities, ...action.payload.post },
                allIds: [..._.map(action.payload.post, 'id'), ...state.allIds],
                isLoading: false
            };
        case GET_POSTS_ERROR:
            return { ...state, isLoading: false };
        case CREATE_POST_SUCCESS:
            return { ...state,
                entities: {...state.entities,
                    [action.payload.id]: action.payload
                },
                allIds: [action.payload.id, ...state.allIds]
            };
        case UPDATE_POST_SUCCESS:
            return { ...state,
                entities: {...state.entities,
                    [action.payload.id]: action.payload
                }
            };
        case DELETE_POST_SUCCESS:
            return { ...state,
                entities: _.omit(state.entities, action.payload),
                allIds: state.allIds.filter(id => id !== action.payload)
            };
        case SIGN_OUT_SUCCESS:
            return initialState;
        default:
            return state;
    }
}