import { FlatList, Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
    getRefreshPosts: PropTypes.func.isRequired,
    getNextPosts: PropTypes.func.isRequired
};

class Posts extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.getRefreshPosts();
    }
    render () {
        return (
            <FlatList
                data={this.props.posts}
                keyExtractor={item => item.id}
                refreshing={this.props.isLoading}
                onRefresh={this.props.getRefreshPosts}
                onEndReached={this.props.getNextPosts}
                renderItem={({item}) =>
                    <View style={styles.container}>
                        <Text>{item.content}</Text>
                        {item.image_medium && <Image  style={styles.image} source={{uri:item.image_medium}} resizeMode="stretch"/>}
                    </View>
                }/>
        )
    }
}

Posts.propTypes = propTypes;

export default Posts;

