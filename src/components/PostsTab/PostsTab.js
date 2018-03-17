import { View, Image, FlatList, Animated } from 'react-native';
import React, { Component } from 'react';
import { Input } from 'react-native-elements';
import { images } from '../../resources/images';
import PropTypes from 'prop-types';
import Post from './Post';
import { styles } from './styles';

const propTypes = {
    currentUserInfo: PropTypes.object.isRequired
};

class PostsTab extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount () {
        this.props.getRefreshPosts();
    }
    render () {
        return (
            <FlatList
                data={this.props.posts}
                contentContainerStyle={{marginTop: 60}}
                keyExtractor={item => item.id}
                refreshing={this.props.isLoading}
                onRefresh={this.props.getRefreshPosts}
                onEndReached={this.props.getNextPosts}
                scrollEventThrottle={1}
                onScroll={ Animated.event([{nativeEvent: {contentOffset: {y: this.props.screenProps.scrollY}}}]) }
                ListHeaderComponent={() =>
                <View style={styles.createPostContainer}>
                    <Image style={styles.creatPostImage} source={ this.props.currentUserInfo.image_small ? {uri:this.props.currentUserInfo.image_small } : images.avatar }/>
                </View>}
                renderItem={({item}) => <Post post={item}/>}/>
        );
    }
}

PostsTab.propTypes = propTypes;

export default PostsTab;
