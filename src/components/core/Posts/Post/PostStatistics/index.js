import { connect } from 'react-redux';
import { makeGetPostDealsState } from '../../../../../redux/selectors/entities/dealsSelectors';
import PostStatistics from './PostStatistics';

const mapState = () => {
    const getPostDealsState = makeGetPostDealsState();
    return (state, ownProps) => {
        return {
            openDeals: getPostDealsState(state, ownProps),
        };
    };
};


export default connect(mapState)(PostStatistics);
