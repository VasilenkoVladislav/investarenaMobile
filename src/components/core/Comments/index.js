import { makeGetCommentsState,
    makeGetHasMoreCommentsState,
    makeGetIsLoadingCommentsState } from '../../../redux/selectors/entities/commentsSelector';
import { getCurrentUserIdState, getCurrentNameState } from '../../../redux/selectors/entities/userSelectors';
import { connect } from 'react-redux';
import Comments from './Comments';

const mapState = () => {
    const getCommentsState = makeGetCommentsState();
    const getHasMoreCommentsState = makeGetHasMoreCommentsState();
    const getIsLoadingCommentsState = makeGetIsLoadingCommentsState();
    return (state, ownProps) => {
        return {
            currentUserId: getCurrentUserIdState(state),
            currentUserName: getCurrentNameState(state),
            comments: getCommentsState(state, ownProps),
            isLoading: getIsLoadingCommentsState(state, ownProps),
            hasMore: getHasMoreCommentsState(state, ownProps)
        };
    };
};

function mapDispatchTopProps (dispatch) {
    return {
        getRefreshComments: () => ({}),
        getNextComments: () => ({})
    }
}

export default connect(mapState, mapDispatchTopProps)(Comments);