import { connect } from 'react-redux';
import { makeIsFavoriteState } from '../../../redux/selectors/entities/favoritesSelectors';
import Favorite from './Favorite';

const mapState = () => {
    const getIsFavoriteState = makeIsFavoriteState();
    return (state, ownProps) => {
        return {
            isFavorite: getIsFavoriteState(state, ownProps),
        };
    };
};

export default connect(mapState)(Favorite);

