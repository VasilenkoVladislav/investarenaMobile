import { Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    style: {}
};

const CustomText = ({ style, children, ...props }) => {
    let newStyle;
    if (Array.isArray(style)) {
        newStyle = [styles.regular, ...style];
    } else {
        newStyle = [styles.regular, style];
    }
    return (
        <Text {...props} style={newStyle}>
            {children}
        </Text>
    );
};

CustomText.propTypes = propTypes;
CustomText.defaultProps = defaultProps;

export default CustomText;
