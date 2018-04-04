import React, { Component } from 'react';
import { CustomText } from '../../CustomText';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
};

class Comment extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return(
            <View><CustomText>Test</CustomText></View>
        )
    }
}
Comment.propTypes = propTypes;

export default Comment;
