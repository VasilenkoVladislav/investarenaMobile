import { getCurrentNameState, getCurrentUserAvatarState } from '../../redux/selectors/entities/userSelectors';
import { createPostRequest } from '../../redux/actions/entities/postsActions';
import CreatePostScreen from './CreatePostScreen';
import { connect } from 'react-redux';


function mapStateToProps (state) {
    return {
        currentUserName: getCurrentNameState(state),
        currentUserAvatar: getCurrentUserAvatarState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        createPost: (clientPostId, data) => dispatch(createPostRequest(clientPostId, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);
