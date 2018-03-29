import { connect } from 'react-redux';
import { makeGetQuoteState } from '../../../../redux/selectors/entities/quotesSelectors';
import { makeGetPostDealsState } from '../../../../redux/selectors/entities/dealsSelectors';
import { makeGetQuoteSettingsState } from '../../../../redux/selectors/entities/quotesSettingsSelectors';
import PostStatistics from './PostStatistics';

const mapState = () => {
    const getPostDealsState = makeGetPostDealsState();
    const getQuoteState = makeGetQuoteState();
    const getQuoteSettingsState = makeGetQuoteSettingsState();
    return (state, ownProps) => {
        return {
            quote: getQuoteState(state, ownProps),
            quoteSettings: getQuoteSettingsState(state, ownProps),
            openDeals: getPostDealsState(state, ownProps),
        };
    };
};


export default connect(mapState)(PostStatistics);
