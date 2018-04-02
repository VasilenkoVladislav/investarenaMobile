import { connect } from 'react-redux';
import { deletePostRequest } from '../../../../redux/actions/entities/postsActions';
import { getCurrentUserIdState } from '../../../../redux/selectors/entities/userSelectors';
import { getModalInfoState } from '../../../../redux/selectors/ui/modalsSelector';
import { hideModal } from '../../../../redux/actions/ui/modalsActions';
import ModalManagePost from './ModalManagePost';

function mapStateToProps (state) {
    return {
        modalInfo: getModalInfoState(state, 'ModalManagePost'),
        currentUserId: getCurrentUserIdState(state),
    }
}

function mapDispatchTopProps (dispatch) {
    return {
        deletePost: (postId) => dispatch(deletePostRequest(postId)),
        hideModal: () => dispatch(hideModal('ModalManagePost'))
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(ModalManagePost);
