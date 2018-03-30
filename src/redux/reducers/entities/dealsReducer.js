import { GET_OPEN_DEALS_SUCCESS,
    GET_CLOSE_DEALS_SUCCESS,
    GET_POST_DEALS_SUCCESS,
    CREATE_OPEN_DEAL_SUCCESS,
    CHANGE_OPEN_DEAL_SUCCESS,
    CLOSE_OPEN_DEAL_SUCCESS,
    SIGN_OUT_SUCCESS,
    AUTHORIZE_BROKER_SUCCESS,
    DISCONNECT_BROKER_SUCCESS
} from '../../constansActions';
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
            return {...state, open: action.payload};
        case GET_CLOSE_DEALS_SUCCESS:
            return {...state, closed: action.payload};
        case GET_POST_DEALS_SUCCESS:
            return {...state,
                postDeals: {...state.postDeals,
                    byPostId: { ...state.postDeals.byPostId,
                        [action.payload.postId]: action.payload.deals
                    }
                }};
        case CREATE_OPEN_DEAL_SUCCESS:
            return createPostOpenDealSuccess(state, action);
        case CLOSE_OPEN_DEAL_SUCCESS :
            return {...state, open: _.omit(state.open, action.payload)};
        case CHANGE_OPEN_DEAL_SUCCESS:
            return chaneOpenDealSuccess(state, action);
        case AUTHORIZE_BROKER_SUCCESS:
        case DISCONNECT_BROKER_SUCCESS:
            return {...state, open: {}, closed: {}};
        case SIGN_OUT_SUCCESS:
            return initialState;
        default:
            return state;
    }
}

export function chaneOpenDealSuccess (state, action) {
    return {
        ...state,
        open:
            { ...state.open,
                [action.payload.dealId]: {...state.open[action.payload.dealId], ...action.payload }}};
}

function createPostOpenDealSuccess (state, action) {
    if (state.postDeals[action.payload.post_id]) {
        return {
            ...state,
            postDeals:
                { ...state.postDeals,
                    [action.payload.post_id]: [...state.postDeals[action.payload.post_id], action.payload] }
        };
    } else {
        return {...state, postDeals: {...state.postDeals, [action.payload.post_id]: [action.payload] } };
    }
}
