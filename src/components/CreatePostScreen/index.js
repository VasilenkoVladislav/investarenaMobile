import { createPostRequest } from '../../redux/actions/entities/postsActions';
import CreatePostScreen from './CreatePostScreen';
import { connect } from 'react-redux';
import { getCurrentUserInfoState } from '../../redux/selectors/entities/userSelectors';


function mapStateToProps (state) {
    return {
        currentUserInfo: getCurrentUserInfoState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        createPost: (clientPostId, data) => dispatch(createPostRequest(clientPostId, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);
