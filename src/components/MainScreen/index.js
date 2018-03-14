import { connect } from 'react-redux';
import { getCurrentUserInfoState } from '../../redux/selectors/entities/userSelectors';
import MainScreen from './MainScreen';

function mapStateToProps (state) {
    return {
        currentUserInfo: getCurrentUserInfoState(state)
    }
}

export default connect(mapStateToProps)(MainScreen);
