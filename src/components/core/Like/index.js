import { connect } from 'react-redux';
import Like from './Like';
import { makeGetLikeState } from '../../../redux/selectors/entities/likesSelector';
import { updateLikeRequest } from '../../../redux/actions/entities/likesActions';

const mapState = () => {
    const getLikeState = makeGetLikeState();
    return (state, ownProps) => {
        return {
            like: getLikeState(state, ownProps)
        };
    };
};

function mapDispatchToProps (dispatch, ownProps) {
    return {
        updateLike: () => dispatch(updateLikeRequest(ownProps.likedId, ownProps.likedType))
    }
}

export default connect(mapState, mapDispatchToProps)(Like);