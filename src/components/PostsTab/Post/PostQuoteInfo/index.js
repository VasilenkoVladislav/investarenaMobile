import { connect } from 'react-redux';
import { makeGetQuoteState } from '../../../../redux/selectors/entities/quotesSelectors';
import { makeGetQuoteSettingsState } from '../../../../redux/selectors/entities/quotesSettingsSelectors';
import PostQuoteInfo from './PostQuoteInfo';

const mapState = () => {
    const getQuoteState = makeGetQuoteState();
    const getQuoteSettingsState = makeGetQuoteSettingsState();
    return (state, ownProps) => {
        return {
            quote: getQuoteState(state, ownProps),
            quoteSettings: getQuoteSettingsState(state, ownProps)
        };
    };
};

export default connect(mapState)(PostQuoteInfo);
