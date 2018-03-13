import { connect } from 'react-redux';
import { getPostsRequest } from '../../../redux/actions/entities/postsActions';
import { getPostsEntitiesState } from '../../../redux/selectors/entities/postsSelectors';
import Posts from './Posts';

function mapStateToProps (state) {
    return {
        posts: getPostsEntitiesState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getPosts: () => dispatch(getPostsRequest())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
