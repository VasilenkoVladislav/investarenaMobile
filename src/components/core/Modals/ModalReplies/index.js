import { connect } from 'react-redux';
import { getModalInfoState } from '../../../../redux/selectors/ui/modalsSelector';
import ModalReplies from './ModalReplies';
import { hideModal } from '../../../../redux/actions/ui/modalsActions';

function mapStateToProps (state) {
    return {
        modalInfo: getModalInfoState(state, 'ModalReplies')
    }
}

function mapDispatchTopProps (dispatch) {
    return {
        hideModal: () => dispatch(hideModal('ModalReplies'))
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(ModalReplies);
