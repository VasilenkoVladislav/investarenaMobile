import { createSelector } from 'reselect';
// selector
const getPlatformState = (state) => state.entities.platform;
// reselect function
export const getIsConnectPlatformState = createSelector(
    [ getPlatformState ],
    (platform) => platform.connect
);
export const getPlatformNameState = createSelector(
    [ getPlatformState ],
    (platform) => platform.platformName
);
export const makePlatformUserStatisticsState = () => createSelector(
    getPlatformState,
    (state, props) => props.balanceType,
    (platform, balanceType) => platform.userStatistics[balanceType] || 0
);
