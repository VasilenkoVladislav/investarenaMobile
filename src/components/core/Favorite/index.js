import { makeIsFavoriteState, makeGetFavoriteState } from '../../../redux/selectors/entities/favoritesSelectors';
import { connect } from 'react-redux';
import Favorite from './Favorite';

const mapState = () => {
    const getIsFavoriteState = makeIsFavoriteState();
    const getFavoriteState = makeGetFavoriteState();
    return (state, ownProps) => {
        return {
            isFavorite: getIsFavoriteState(state, ownProps),
            favorite: getFavoriteState(state, ownProps)
        };
    };
};

export default connect(mapState)(Favorite);

