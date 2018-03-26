import { getCurrentUserAvatarState, getCurrentUserIdState } from '../../../redux/selectors/entities/userSelectors';
import AvatarUser from './AvatarUser';
import { connect } from 'react-redux';

function mapStateToProps (state) {
    return {
        currentUserId: getCurrentUserIdState(state),
        currentUserAvatar: getCurrentUserAvatarState(state)
    };
}

export default connect(mapStateToProps)(AvatarUser);
