import { View, FlatList, Animated, Text } from 'react-native';
import React, { Component } from 'react';
import { Icon, Avatar } from 'react-native-elements';
import { images } from '../../resources/images';
import PropTypes from 'prop-types';
import Post from './Post';
import { styles } from './styles';

const propTypes = {
    currentUserAvatar: PropTypes.shape({
        small: PropTypes.string,
        medium: PropTypes.string,
        large: PropTypes.string
    }),
    currentUserId: PropTypes.string.isRequired,
    currentUserName: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    hasMore: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

class PostsTab extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount () {
        const { posts } = this.props;
        posts.length === 0 && this.props.getRefreshPosts();
    }
    render () {
        return (
            <FlatList
                data={this.props.posts}
                contentContainerStyle={{marginTop: 60}}
                keyExtractor={item => item.id || item.client_id}
                refreshing={this.props.isLoading}
                onRefresh={this.props.getRefreshPosts}
                onEndReached={this.props.getNextPosts}
                scrollEventThrottle={1}
                onScroll={ Animated.event([{nativeEvent: {contentOffset: {y: this.props.screenProps.scrollY}}}]) }
                ListHeaderComponent={() =>
                <View style={styles.createPostContainer}>
                    <Avatar
                        small
                        rounded
                        source={ this.props.currentUserAvatar.small ? { uri:this.props.currentUserAvatar.small } : images.avatar }
                        activeOpacity={0.7} />
                    <View style={styles.createPostTextWrap}>
                        <Text onPress={() => this.props.goScreen('CreatePost')}>
                            What do you think?
                        </Text>
                    </View>
                    <Icon name='image' color='#2c3552' size={30} onPress={() => this.props.goScreen('ImagePicker')}/>
                    <Icon name='attachment' color='#2c3552' size={30}/>
                </View>}
                renderItem={({item}) => <Post post={item}
                                              currentUserId={this.props.currentUserId}
                                              currentUserName={this.props.currentUserName}
                                              currentUserAvatar={this.props.currentUserAvatar}/>}/>
        );
    }
}

PostsTab.propTypes = propTypes;

export default PostsTab;
