import { getCurrentNameState, getCurrentUserIdState } from '../../../redux/selectors/entities/userSelectors';
import { connect } from 'react-redux';
import { getPostDealsRequest } from '../../../redux/actions/entities/dealsActions';
import { makeGetQuoteState} from '../../../redux/selectors/entities/quotesSelectors';
import { makeGetQuoteSettingsState } from '../../../redux/selectors/entities/quotesSettingsSelectors';
import { makeGetPostDealsState } from '../../../redux/selectors/entities/dealsSelectors';
import Post from './Post';

const mapState = () => {
    const getPostDealsState = makeGetPostDealsState();
    const getQuoteState = makeGetQuoteState();
    const getQuoteSettingsState = makeGetQuoteSettingsState();
    return (state, ownProps) => {
        return {
            quote: getQuoteState(state, ownProps),
            quoteSettings: getQuoteSettingsState(state, ownProps),
            openDeals: getPostDealsState(state, ownProps),
            currentUserId: getCurrentUserIdState(state),
            currentUserName: getCurrentNameState(state)
        };
    };
};

function mapDispatchToProps (dispatch) {
    return {
        getPostDeals: (postId) => dispatch(getPostDealsRequest(postId)),
    };
}

export default connect(mapState, mapDispatchToProps)(Post);
