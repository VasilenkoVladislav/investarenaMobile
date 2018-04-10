import { connect } from 'react-redux';
import { getIsConnectPlatformState } from '../../../../../redux/selectors/entities/platformSelectors';
import { getChartDataRequest } from '../../../../../redux/actions/entities/chartsActions';
import { makeGetBarsState } from '../../../../../redux/selectors/entities/chartsSelectors';
import PostChart from './PostChart';

const mapState = () => {
    const getBarsState = makeGetBarsState();
    return (state, ownProps) => {
        return {
            charts: getBarsState(state, ownProps),
            connect: getIsConnectPlatformState(state),
        };
    };
};

function mapDispatchToProps (dispatch, ownProps) {
    return ({
        getChartData: (timeScale) => dispatch(getChartDataRequest(ownProps.quoteSecurity, timeScale))
    });
}


export default connect(mapState, mapDispatchToProps)(PostChart);
