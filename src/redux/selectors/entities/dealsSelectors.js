import { createSelector } from 'reselect';

// selector
const getDealsState = (state) => state.entities.deals;
// reselect function

export const getOpenDealsState = createSelector(
    getDealsState,
    (deals) => deals.open.allIds.map(id => deals.open.entities[id])
);

export const getClosedDealsState = createSelector(
    getDealsState,
    (deals) => deals.closed.allIds.map(id => deals.closed.entities[id])
);

export const makeGetPostDealsState = () => createSelector(
    getDealsState,
    (state, props) => props.postId,
    (deals, postId) => deals.postDeals.byPostId[postId] || []
);
