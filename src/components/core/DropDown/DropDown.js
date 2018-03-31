import React, { cloneElement } from 'react';
import DropDownMenu from './DropDownMenu';
import DropDownToggle from './DropDownToggle';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};

const DropDown = ({isOpen, toggle, children}) => {
    const boundChildren = React.Children.map(children, child => {
        if (child.type === DropDownToggle) {
            child = cloneElement(child, { toggle });
        } else if (child.type === DropDownMenu && !isOpen) {
            child = null;
        }
        return child;
    });
    return (
        <View>
            {boundChildren}
        </View>
    );
};

DropDown.propTypes = propTypes;

export default DropDown;
