import { GET_FAVORITES_SUCCESS,
    UPDATE_FAVORITE_REQUEST,
    UPDATE_FAVORITE_SUCCESS,
    UPDATE_FAVORITE_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR } from '../../constansActions';
import _ from 'lodash';

const initialState = {
    entities: {},
    allQuotes: []
};

export default function (state = initialState, action) {
    switch (action.type) {
    case GET_FAVORITES_SUCCESS:
        return { ...state,
            entities: action.payload.reduce((result, item) => {
                state.entities[item] = {
                    quote: item,
                    isLoading: false
                };
                return state.entities;
            }, state.entities),
            allQuotes: [...action.payload]
        };
    case UPDATE_FAVORITE_REQUEST:
        return {...state,
            entities: { ...state.entities,
                [action.payload]: { ...state.entities[action.payload],
                    isLoading: true
                }
            }
        };
    case UPDATE_FAVORITE_SUCCESS:
        if (state.allQuotes.includes(action.payload)) {
            return {...state,
                entities: _.omit(state.entities, action.payload),
                allQuotes: state.allQuotes.filter(favorites => favorites !== action.payload)
            };
        } else {
            return {...state,
                entities: {...state.entities,
                    [action.payload]: {
                        quote: action.payload,
                        isLoading: false
                    }
                },
                allQuotes: [...state.allQuotes, action.payload]
            };
        }
    case UPDATE_FAVORITE_ERROR:
        return {...state,
            entities: { ...state.entities,
                [action.payload]: { ...state.entities[action.payload],
                    isLoading: false
                }
            }
        };
    case SIGN_IN_SUCCESS:
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_ERROR:
        return initialState;
    default:
        return state;
    }
}
