import { connect } from 'react-redux';
import { getModalInfoState } from '../../../../redux/selectors/ui/modalsSelector';
import ModalComments from './ModalComments';
import { hideModal } from '../../../../redux/actions/ui/modalsActions';

function mapStateToProps (state) {
    return {
        modalInfo: getModalInfoState(state, 'ModalComments')
    }
}

function mapDispatchTopProps (dispatch) {
    return {
        hideModal: () => dispatch(hideModal('ModalComments'))
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(ModalComments);
