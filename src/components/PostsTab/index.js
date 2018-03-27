import { getPostsEntitiesState, getPostHasMoreState, getPostsIsLoadingState } from '../../redux/selectors/entities/postsSelectors';
import { getCurrentNameState, getCurrentUserAvatarState, getCurrentUserIdState } from '../../redux/selectors/entities/userSelectors';
import { getNextPostsRequest, getRefreshPostsRequest } from '../../redux/actions/entities/postsActions';
import { connect } from 'react-redux';
import { getPostDealsRequest } from '../../redux/actions/entities/dealsActions';
import { getQuotesState } from '../../redux/selectors/entities/quotesSelectors';
import { getQuotesSettingsState } from '../../redux/selectors/entities/quotesSettingsSelectors';
import { push } from '../../redux/actions/nav'
import PostsTab from './PostsTab';

function mapStateToProps (state) {
    return {
        posts: getPostsEntitiesState(state),
        isLoading: getPostsIsLoadingState(state),
        hasMore: getPostHasMoreState(state),
        currentUserId: getCurrentUserIdState(state),
        currentUserName: getCurrentNameState(state),
        currentUserAvatar: getCurrentUserAvatarState(state),
        quotesSettings: getQuotesSettingsState(state),
        quotes: getQuotesState(state),
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getRefreshPosts: () => dispatch(getRefreshPostsRequest()),
        getPostDeals: (postId) => dispatch(getPostDealsRequest(postId)),
        getNextPosts: () => dispatch(getNextPostsRequest()),
        goScreen: (screen) => dispatch(push(screen))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsTab);
