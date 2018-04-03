import { connect } from 'react-redux';
import PostCounts from './PostCounts';
import { makeGetLikeState } from '../../../../../redux/selectors/entities/likesSelector';

const mapState = () => {
    const getLikeState = makeGetLikeState();
    return (state, ownProps) => {
        return {
            like: getLikeState(state, ownProps)
        };
    };
};

export default connect(mapState)(PostCounts);