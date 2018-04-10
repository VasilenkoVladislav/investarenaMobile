import { createSelector } from 'reselect';
// selector
export const getChartsState = (state) => state.entities.charts;
// reselect function
export const makeGetBarsState = () => createSelector(
    getChartsState,
    (state, props) => props.quoteSecurity,
    (charts, quoteSecurity) => charts.byQuoteSecurity[quoteSecurity]
);
