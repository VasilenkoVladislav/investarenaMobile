import { connect } from 'react-redux';
import { getModalInfoState } from '../../../../redux/selectors/ui/modalsSelector';
import ModalSharePost from './ModalSharePost';
import { hideModal } from '../../../../redux/actions/ui/modalsActions';

function mapStateToProps (state) {
    return {
        modalInfo: getModalInfoState(state, 'ModalSharePost')
    }
}

function mapDispatchTopProps (dispatch) {
    return {
        hideModal: () => dispatch(hideModal('ModalSharePost'))
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(ModalSharePost);
