import { createPostRequest } from '../../redux/actions/entities/postsActions';
import CreatePostScreen from './CreatePostScreen';
import { connect } from 'react-redux';
import { getCurrentNameState } from '../../redux/selectors/entities/userSelectors';


function mapStateToProps (state) {
    return {
        currentUserName: getCurrentNameState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        createPost: (clientPostId, data) => dispatch(createPostRequest(clientPostId, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);
