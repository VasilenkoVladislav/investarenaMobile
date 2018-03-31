import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

const DropDownItem = ({children, onClick}) => <TouchableOpacity onPress={onClick}>{children}</TouchableOpacity>;

DropDownItem.propTypes = propTypes;

export default DropDownItem;
