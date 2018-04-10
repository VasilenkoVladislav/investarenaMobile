import { GET_CHART_DATA_REQUEST, GET_CHART_DATA_SUCCESS } from '../../constansActions';

const initialState = { byQuoteSecurity: {} };

export default function (state = initialState, action) {
    switch (action.type) {
    case GET_CHART_DATA_REQUEST:
        return getChartDataRequest(state, action.payload);
    case GET_CHART_DATA_SUCCESS:
        return getChartDataSuccess(state, action.payload);
    default:
        return state;
    }
}

function getChartDataRequest (state, payload) {
    if (state.byQuoteSecurity[payload.quoteSecurity]) {
        return {...state,
            byQuoteSecurity: {...state.byQuoteSecurity,
                [payload.quoteSecurity]: {...state.byQuoteSecurity[payload.quoteSecurity],
                    [payload.timeScale]: {...state.byQuoteSecurity[payload.quoteSecurity][payload.timeScale],
                        isLoading: true
                    }
                }
            }

        };
    } else {
        return {
            ...state,
            byQuoteSecurity: {...state.byQuoteSecurity,
                [payload.quoteSecurity]: {
                    [payload.timeScale]: {
                        bars: [],
                        isLoading: true
                    }
                }
            }
        };
    }
}

function getChartDataSuccess (state, payload) {
    if (state.byQuoteSecurity[payload.quoteSecurity]) {
        return {...state,
            byQuoteSecurity: {...state.byQuoteSecurity,
                [payload.quoteSecurity]: {...state.byQuoteSecurity[payload.quoteSecurity],
                    [payload.timeScale]: {
                        bars: payload.bars,
                        isLoading: false
                    }
                }
            }

        };
    } else {
        return {...state,
            byQuoteSecurity: {...state.byQuoteSecurity,
                [payload.quoteSecurity]: {
                    [payload.timeScale]: {
                        bars: payload.bars,
                        isLoading: false
                    }
                }
            }
        };
    }
}
