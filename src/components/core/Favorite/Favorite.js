import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import React from 'react';
import { platformService } from '../../../platform/platformService';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    size: PropTypes.number,
    favorite: PropTypes.object,
    isFavorite: PropTypes.bool.isRequired,
    quoteSecurity: PropTypes.string.isRequired
};

const defaultProps = {
    size: 24
};

const Favorite = ({isFavorite, favorite, size, quoteSecurity}) => {
    let view;
    const handleOnPress = () => {
        if ((favorite && !favorite.isLoading) || !favorite) {
            view.swing(1500);
            platformService.platform.updateFavorite(quoteSecurity);
        }
    };
    return <TouchableWithoutFeedback onPress={handleOnPress}>
            <Animatable.View ref={ref => view = ref}>
                <Icon name='star'
                      size={size}
                      color={isFavorite ? '#134bad' : '#e2e2e5'} />
            </Animatable.View>
        </TouchableWithoutFeedback>

};

Favorite.propTypes = propTypes;
Favorite.defaultProps = defaultProps;

export default Favorite;
