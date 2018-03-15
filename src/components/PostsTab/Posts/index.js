import { connect } from 'react-redux';
import { getNextPostsRequest, getRefreshPostsRequest } from '../../../redux/actions/entities/postsActions';
import { getPostsEntitiesState, getPostHasMoreState, getPostsIsLoadingState } from '../../../redux/selectors/entities/postsSelectors';
import Posts from './Posts';

function mapStateToProps (state) {
    return {
        posts: getPostsEntitiesState(state),
        isLoading: getPostsIsLoadingState(state),
        hasMore: getPostHasMoreState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getRefreshPosts: () => dispatch(getRefreshPostsRequest()),
        getNextPosts: () => dispatch(getNextPostsRequest())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
