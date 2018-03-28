import { Icon } from 'react-native-elements';
import React from 'react';
import { platformService } from '../../../platform/platformService';
import PropTypes from 'prop-types';

const propTypes = {
    size: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    quoteSecurity: PropTypes.string.isRequired
};

const Favorite = ({isFavorite, size, quoteSecurity}) => {
    return <Icon name='star'
                 onPress={() => platformService.platform.updateFavorite(quoteSecurity)}
                 size={size}
                 color={isFavorite ? '#134bad' : '#e2e2e5'} />
};

Favorite.propTypes = propTypes;

export default Favorite;
