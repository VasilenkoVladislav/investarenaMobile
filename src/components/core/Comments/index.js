import { makeGetCommentsState,
    makeGetHasMoreCommentsState,
    makeGetIsLoadingCommentsState } from '../../../redux/selectors/entities/commentsSelector';
import { getCurrentUserIdState, getCurrentNameState } from '../../../redux/selectors/entities/userSelectors';
import { getRefreshCommentsRequest, getNextCommentsRequest } from '../../../redux/actions/entities/commentsActions';
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

function mapDispatchTopProps (dispatch, ownProps) {
    return {
        getRefreshComments: () => dispatch(getRefreshCommentsRequest(ownProps.commentableId, ownProps.commentableType)),
        getNextComments: () => dispatch(getNextCommentsRequest(ownProps.commentableId, ownProps.commentableType))
    }
}

export default connect(mapState, mapDispatchTopProps)(Comments);