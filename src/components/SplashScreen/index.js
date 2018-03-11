import { connect } from 'react-redux';
import SplashScreen from './SplashScreen';
import { validateTokenRequest } from '../../redux/actions/entities/authenticateActions';

function mapDispatchToProps (dispatch) {
    return {
        validateToken: () => dispatch(validateTokenRequest())
    }
}

export default connect(null, mapDispatchToProps)(SplashScreen);
