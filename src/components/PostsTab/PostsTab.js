import { View, Image } from 'react-native';
import React, { Component } from 'react';
import Posts from './Posts';
import { Input } from 'react-native-elements';
import { styles } from './styles';
import PropTypes from 'prop-types';

const propTypes = {
    currentUserInfo: PropTypes.object.isRequired
};

class PostsTab extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.createPostContainer}>
                    <Image style={styles.image} source={{uri: this.props.currentUserInfo.image_small}}/>
                </View>
                <Posts screenProps={this.props.screenProps}/>
            </View>
        );
    }
}

PostsTab.propTypes = propTypes;

export default PostsTab;
