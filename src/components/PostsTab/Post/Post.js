import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import React from 'react';

const Post = ({post}) => {
    return (
        <View style={styles.container}>
            <Text>{post.content}</Text>
            {post.image_medium && <Image style={styles.image} source={{uri:post.image_medium}} resizeMode="stretch"/>}
        </View>
    );
};

export default Post;
