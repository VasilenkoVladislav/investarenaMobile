import { getCurrentNameState, getCurrentUserIdState } from '../../../redux/selectors/entities/userSelectors';
import { getPostsEntitiesState, getPostHasMoreState, getPostsIsLoadingState } from '../../../redux/selectors/entities/postsSelectors';
import { getNextPostsRequest, getRefreshPostsRequest } from '../../../redux/actions/entities/postsActions';
import { connect } from 'react-redux';
import { getRefreshCommentsRequest } from '../../../redux/actions/entities/commentsActions';
import { getQuotesState } from '../../../redux/selectors/entities/quotesSelectors';
import { getQuotesSettingsState } from '../../../redux/selectors/entities/quotesSettingsSelectors';
import { getPostDealsRequest } from '../../../redux/actions/entities/dealsActions';
import { push } from '../../../redux/actions/nav'
import Posts from './Posts';
import { showModal } from '../../../redux/actions/ui/modalsActions';

function mapStateToProps (state) {
    return {
        quotes: getQuotesState(state),
        quotesSettings: getQuotesSettingsState(state),
        posts: getPostsEntitiesState(state),
        hasMore: getPostHasMoreState(state),
        isLoading: getPostsIsLoadingState(state),
        currentUserId: getCurrentUserIdState(state),
        currentUserName: getCurrentNameState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        showModal: (type, data) => dispatch(showModal(type, data)),
        getPostDeals: (postId) => dispatch(getPostDealsRequest(postId)),
        getRefreshPosts: () => dispatch(getRefreshPostsRequest()),
        getNextPosts: () => dispatch(getNextPostsRequest()),
        goScreen: (screen) => dispatch(push(screen)),
        getRefreshComments: (commentableId) => dispatch(getRefreshCommentsRequest(commentableId, 'Post'))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
