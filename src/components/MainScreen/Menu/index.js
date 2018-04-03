import { connect } from 'react-redux';
import { getCurrentNameState } from '../../../redux/selectors/entities/userSelectors';
import { signOutRequest } from '../../../redux/actions/entities/authenticateActions';
import { push } from '../../../redux/actions/nav'
import Menu from './Menu';

function mapStateToProps (state) {
    return {
        currentUserName: getCurrentNameState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        goScreen: (screen) => dispatch(push(screen)),
        signOut: () => dispatch(signOutRequest())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
