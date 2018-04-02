import { connect } from 'react-redux';
import { getUserStatusState } from '../../../redux/selectors/entities/usersStatusSelectors';
import UserStatus from './UserStatus';

function mapStateToProps (state, ownProps) {
    return {
        userStatus: getUserStatusState(state, ownProps)
    };
}

export default connect(mapStateToProps)(UserStatus);



