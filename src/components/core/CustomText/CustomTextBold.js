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

const CustomTextBold = ({ style, children, ...props }) => {
    let newStyle;
    if (Array.isArray(style)) {
        newStyle = [styles.bold, ...style];
    } else {
        newStyle = [styles.bold, style];
    }
    return (
        <Text {...props} style={newStyle}>
            {children}
        </Text>
    );
};

CustomTextBold.propTypes = propTypes;
CustomTextBold.defaultProps = defaultProps;

export default CustomTextBold;
