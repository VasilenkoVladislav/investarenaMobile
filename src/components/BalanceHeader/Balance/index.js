import { getIsConnectPlatformState,
    makePlatformUserStatisticsState } from '../../../redux/selectors/entities/platformSelectors';
import Balance from './Balance';
import { connect } from 'react-redux';

const mapState = () => {
    const getUserStatisticsState = makePlatformUserStatisticsState();
    return (state, ownProps) => {
        return {
            balance: getUserStatisticsState(state, ownProps),
            platformConnect: getIsConnectPlatformState(state)
        };
    };
};

export default connect(mapState)(Balance);
