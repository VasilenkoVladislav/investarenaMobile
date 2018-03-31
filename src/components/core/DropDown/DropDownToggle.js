import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const propTypes = {
    toggle: PropTypes.func,
    children: PropTypes.node.isRequired
};

const DropDownToggle = ({toggle, children}) => {
    return (
        <TouchableOpacity onPress={toggle}>{children}</TouchableOpacity>
    );
};

DropDownToggle.propTypes = propTypes;

export default DropDownToggle;
