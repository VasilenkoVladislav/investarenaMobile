import { View, FlatList, Animated } from 'react-native';
import React, { Component } from 'react';
import AvatarUser from '../core/AvatarUser';
import { CustomText } from '../core/CustomText';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Post from './Post';
import { styles } from './styles';

const propTypes = {
    posts: PropTypes.array.isRequired,
    hasMore: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

class PostsTab extends Component {
    constructor(props) {
        super(props);
        this.state={ viewableItems:[] };
    }
    componentWillMount () {
        const { posts } = this.props;
        posts.length === 0 && this.props.getRefreshPosts();
    }
    onRefresh = () => {
        if (!this.props.isLoading) {
            this.props.getRefreshPosts();
        }
    };
    onEndReached = () => {
        if (!this.props.isLoading) {
            this.props.getNextPosts();
        }
    };
    renderItem = ({item}) => (
        <Post post={item}
              visible={this.state.viewableItems.includes(item.id)}
              currentUserId={this.props.currentUserId}
              currentUserName={this.props.currentUserName}
              getPostDeals={this.props.getPostDeals}/>
    );
    renderHeader = () => (
        <View style={styles.createPostContainer}>
            <AvatarUser
                size='small'
                componentProps={{
                    rounded: true,
                    activeOpacity: 0.7 }}/>
            <View style={styles.createPostTextWrap}>
                <CustomText style={{fontSize: 12}} onPress={() => this.props.goScreen('CreatePost')}>
                    What do you think?
                </CustomText>
            </View>
            <Icon name='image' color='#2c3552' size={30} onPress={() => this.props.goScreen('ImagePicker')}/>
            <Icon name='attachment' color='#2c3552' size={30}/>
        </View>
    );
    onViewableItemsChanged = ({viewableItems}) => {
        this.setState({viewableItems: viewableItems.map(x => x.key)});
    };
    render () {
        return (
            <FlatList
                data={this.props.posts}
                contentContainerStyle={{marginTop: 60}}
                keyExtractor={item => item.id || item.client_id}
                refreshing={this.props.isLoading}
                onViewableItemsChanged={this.onViewableItemsChanged}
                onRefresh={this.onRefresh}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={1}
                // onScroll={ Animated.event([{nativeEvent: {contentOffset: {y: this.props.screenProps.scrollY}}}]) }
                ListHeaderComponent={this.renderHeader}
                renderItem={this.renderItem} />
        );
    }
}

PostsTab.propTypes = propTypes;

export default PostsTab;
