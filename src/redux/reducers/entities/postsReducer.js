import { GET_NEXT_POSTS_REQUEST,
    GET_REFRESH_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    UPDATE_POST_SUCCESS,
    DELETE_POST_SUCCESS,
    SIGN_OUT_SUCCESS } from '../../constansActions';
import _ from 'lodash';

const initialState = {
    entities: {},
    allIds: [],
    unConfirmed: {},
    unConfirmedIds: [],
    isLoading: false,
    hasMore: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NEXT_POSTS_REQUEST:
            return { ...state, isLoading: true };
        case GET_REFRESH_POSTS_REQUEST:
            return { ...state, isLoading: true };
        case GET_POSTS_SUCCESS:
            return { ...state,
                entities: action.payload.posts.reduce((result, item) => {
                        state.entities[item.id] = item;
                        return state.entities;
                    }, state.entities),
                allIds: [...state.allIds, ..._.map(action.payload.posts, 'id')],
                isLoading: false,
                hasMore: action.payload.hasMore
            };
        case GET_POSTS_ERROR:
            return { ...state, isLoading: false };
        case CREATE_POST_REQUEST:
            return {...state,
                unConfirmed: {...state.unConfirmed,
                    [action.payload.clientPostId]: action.payload.data.post
                },
                unConfirmedIds: [action.payload.clientPostId, ...state.unConfirmedIds],
            };
        case CREATE_POST_SUCCESS:
            return { ...state,
                entities: {...state.entities,
                    [action.payload.data.id]: action.payload.data
                },
                allIds: [action.payload.data.id, ...state.allIds],
                unConfirmed:_.omit(state.unConfirmed, action.payload.clientPostId),
                unConfirmedIds: state.unConfirmedIds.filter(id => id !== action.payload.clientPostId)
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