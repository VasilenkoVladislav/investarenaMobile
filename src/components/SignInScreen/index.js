import { signInRequest, oAuthSignInRequest } from '../../redux/actions/entities/authenticateActions';
import { connect } from 'react-redux';
import { getUserIsLoadingState } from '../../redux/selectors/entities/userSelectors';
import { push } from '../../redux/actions/nav';
import SignInScreen from './SignInScreen';

function mapStateToProps (state) {
    return {
        isLoading: getUserIsLoadingState(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        pushScreen: (routeName) => dispatch(push(routeName)),
        signIn: (email, password) => dispatch(signInRequest(email, password)),
        oAuthSignIn: (provider) => dispatch(oAuthSignInRequest(provider))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
