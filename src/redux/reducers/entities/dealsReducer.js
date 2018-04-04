import { GET_OPEN_DEALS_SUCCESS,
    GET_CLOSE_DEALS_SUCCESS,
    GET_POST_DEALS_SUCCESS,
    CREATE_OPEN_DEAL_SUCCESS,
    CHANGE_OPEN_DEAL_SUCCESS,
    CLOSE_OPEN_DEAL_SUCCESS,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR,
    AUTHORIZE_BROKER_SUCCESS,
    DISCONNECT_BROKER_SUCCESS,
    DELETE_POST_SUCCESS } from '../../constansActions';
import _ from 'lodash';

const initialState = {
    open: {
        entities: {},
        allIds: []
    },
    closed: {
        entities: {},
        allIds: []
    },
    postDeals: {
        byPostId: {},
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
    case GET_OPEN_DEALS_SUCCESS:
        return getOpenDealsSuccess(state, action);
    case GET_CLOSE_DEALS_SUCCESS:
        return getClosedDealsSuccess(state, action);
    case GET_POST_DEALS_SUCCESS:
        return getPostDealSuccess(state, action);
    case CREATE_OPEN_DEAL_SUCCESS:
        return createPostOpenDealSuccess(state, action);
    case CLOSE_OPEN_DEAL_SUCCESS :
        return closeOpenDealSuccess(state, action);
    case CHANGE_OPEN_DEAL_SUCCESS:
        return chaneOpenDealSuccess(state, action);
    case DELETE_POST_SUCCESS:
        return deletePostOpenDeal(state, action);
    case AUTHORIZE_BROKER_SUCCESS:
    case DISCONNECT_BROKER_SUCCESS:
        return {...state,
            open: {
                entities: {},
                allIds: []
            },
            closed: {
                entities: {},
                allIds: []
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

function getOpenDealsSuccess (state, action) {
    return {...state,
        open: { ...state.open,
            entities: action.payload,
            allIds: _.map(action.payload, 'dealId')
        }
    };
}

function getClosedDealsSuccess (state, action) {
    return {...state,
        closed: { ...state.closed,
            entities: action.payload,
            allIds: _.map(action.payload, 'dealId')
        }
    };
}

function getPostDealSuccess (state, action) {
    return {...state,
        postDeals: { ...state.postDeals,
            byPostId: { ...state.postDeals.byPostId,
                [action.payload.postId]: action.payload.deals
            }
        }
    };
}

function chaneOpenDealSuccess (state, action) {
    return { ...state,
        open: { ...state.open,
            entities: { ...state.open.entities,
                [action.payload.dealId]: {...state.open[action.payload.dealId],
                    ...action.payload
                }
            }
        }
    };
}

function closeOpenDealSuccess (state, action) {
    return { ...state,
        open: { ...state.open,
            entities: _.omit(state.open.entities, action.payload),
            allIds: state.open.allIds.filter(id => id !== action.payload)
        }
    };
}

function createPostOpenDealSuccess (state, action) {
    if (state.postDeals[action.payload.post_id]) {
        return {...state,
            postDeals: { ...state.postDeals,
                    [action.payload.post_id]: [...state.postDeals[action.payload.post_id], action.payload] }
        };
    } else {
        return {...state,
            postDeals: { ...state.postDeals,
                [action.payload.post_id]: [action.payload]
            }
        };
    }
}

function deletePostOpenDeal (state, action) {
    if (state.postDeals.byPostId[action.payload]) {
        return {
            ...state,
            postDeals: { ...state.postDeals,
                byPostId:  _.omit(state.postDeals.byPostId, action.payload)
            }
        }
    } else {
        return state;
    }
}
