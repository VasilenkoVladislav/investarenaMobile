import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const propTypes = {
    children: PropTypes.node.isRequired
};

const DropDownMenu = ({children}) => {
    return (
        <View>{children}</View>
    );
};

DropDownMenu.propTypes = propTypes;

export default DropDownMenu;
