import { View, FlatList, Animated, Text } from 'react-native';
import React, { Component } from 'react';
import AvatarUser from '../core/AvatarUser';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Post from './Post';
import { styles } from './styles';

const propTypes = {
    quotes: PropTypes.object,
    quotesSettings: PropTypes.object,
    currentUserAvatar: PropTypes.shape({
        small: PropTypes.string,
        medium: PropTypes.string,
        large: PropTypes.string
    }).isRequired,
    getPostDeals: PropTypes.func.isRequired,
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
                    <AvatarUser
                        size='small'
                        componentProps={{
                            rounded: true,
                            activeOpacity: 0.7 }}/>
                    <View style={styles.createPostTextWrap}>
                        <Text onPress={() => this.props.goScreen('CreatePost')}>
                            What do you think?
                        </Text>
                    </View>
                    <Icon name='image' color='#2c3552' size={30} onPress={() => this.props.goScreen('ImagePicker')}/>
                    <Icon name='attachment' color='#2c3552' size={30}/>
                </View>}
                renderItem={({item}) => <Post post={item}
                                              quote={this.props.quotes && this.props.quotes[item.quote]}
                                              quoteSettings = {this.props.quotesSettings && this.props.quotesSettings[item.quote]}
                                              currentUserId={this.props.currentUserId}
                                              currentUserName={this.props.currentUserName}
                                              getPostDeals={this.props.getPostDeals}/>}/>
        );
    }
}

PostsTab.propTypes = propTypes;

export default PostsTab;
