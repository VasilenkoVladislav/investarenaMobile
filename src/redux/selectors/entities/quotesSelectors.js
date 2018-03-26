import { createSelector } from 'reselect';
// selector
export const getQuotesState = (state) => state.entities.quotes;
// reselect function
export const makeGetQuoteState = () => createSelector(
    getQuotesState,
    (state, props) => props.quoteSecurity,
    (quotes, quoteSecurity) => quotes[quoteSecurity]
);
