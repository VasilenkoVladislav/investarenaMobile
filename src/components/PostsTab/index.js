import { connect } from 'react-redux';
import { getCurrentUserInfoState } from '../../redux/selectors/entities/userSelectors';
import PostsTab from './PostsTab';

function mapStateToProps (state) {
    return {
        currentUserInfo: getCurrentUserInfoState(state)
    }
}

export default connect(mapStateToProps)(PostsTab);
