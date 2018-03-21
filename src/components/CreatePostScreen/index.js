import { createPostRequest } from '../../redux/actions/entities/postsActions';
import CreatePostScreen from './CreatePostScreen';
import { connect } from 'react-redux';

function mapDispatchToProps (dispatch) {
    return {
        createPost: (data) => dispatch(createPostRequest(data))
    }
}

export default connect(null, mapDispatchToProps)(CreatePostScreen);
