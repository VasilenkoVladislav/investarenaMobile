import { View, Image, Text, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    post: PropTypes.object.isRequired
};

const Post = ({post}) => {
    return (
        <View style={[ styles.container, { backgroundColor: post.created_at ? '#fff' : 'grey' }]}>
            { Platform.OS === 'android'
                ? !post.created_at && <ProgressBarAndroid styleAttr='Horizontal' color='#3a79ee'/>
                : !post.created_at && <ProgressViewIOS trackTintColor='#3a79ee'/> }
            <Text>{post.content}</Text>
            {post.image_medium && <Image style={styles.image} source={{uri:post.image_medium}} resizeMode="stretch"/>}
        </View>
    );
};

Post.propTypes = propTypes;

export default Post;
