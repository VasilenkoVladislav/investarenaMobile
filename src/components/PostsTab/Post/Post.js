import { View, Image, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    post: PropTypes.object.isRequired
};

const Post = ({post}) => {
    return (
        <View style={styles.container}>
            <Text>{post.content}</Text>
            {post.image_medium && <Image style={styles.image} source={{uri:post.image_medium}} resizeMode="stretch"/>}
        </View>
    );
};

Post.propTypes = propTypes;

export default Post;
