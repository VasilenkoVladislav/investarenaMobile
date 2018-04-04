import { View, FlatList, TouchableOpacity, NetInfo } from 'react-native';
import React, { PureComponent } from 'react';
import AvatarUser from '../AvatarUser';
import { CustomText } from '../CustomText';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Post from './Post';
import { styles } from './styles';

const propTypes = {
    quotes: PropTypes.object,
    quotesSettings: PropTypes.object,
    posts: PropTypes.array.isRequired,
    hasMore: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    showModal: PropTypes.func.isRequired,
    getPostDeals: PropTypes.func.isRequired,
    getRefreshPosts: PropTypes.func.isRequired,
    getNextPosts: PropTypes.func.isRequired,
    goScreen: PropTypes.func.isRequired
};

class Posts extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { viewableItems:[] };
    }
    onRefresh = async () => {
        const { type } = await NetInfo.getConnectionInfo();
        if (!this.props.isLoading && type !== 'none') {
            this.props.getRefreshPosts();
        }
    };
    onEndReached = async () => {
        const { type } = await NetInfo.getConnectionInfo();
        if (!this.props.isLoading && type !== 'none') {
            this.props.getNextPosts();
        }
    };
    renderItem = ({item}) => (
        <Post post={item}
              quote={this.props.quotes && this.props.quotes[item.quote]}
              quoteSettings={this.props.quotesSettings && this.props.quotesSettings[item.quote]}
              visible={this.state.viewableItems.includes(item.id)}
              currentUserId={this.props.currentUserId}
              currentUserName={this.props.currentUserName}
              showModal={this.props.showModal}
              getPostDeals={this.props.getPostDeals}/>
    );
    renderHeader = () => (
        <View style={styles.createPostContainer}>
            <AvatarUser
                size='small'
                componentProps={{
                    rounded: true,
                    activeOpacity: 0.7 }}/>
            <TouchableOpacity style={styles.createPostTextWrap} onPress={() => this.props.goScreen('CreatePost')}>
                <CustomText>
                    What do you think?
                </CustomText>
            </TouchableOpacity>
            <Icon name='image' color='#2c3552' size={30} onPress={() => this.props.goScreen('ImagePicker')}/>
            <Icon name='attachment' color='#2c3552' size={30}/>
        </View>
    );
    onViewableItemsChanged = ({viewableItems}) => {
        this.setState({viewableItems: viewableItems.map(item => item.key)});
    };
    render () {
        return (
            <FlatList
                data={this.props.posts}
                contentContainerStyle={{marginTop: 10}}
                keyExtractor={item => item.id || item.client_id}
                refreshing={this.props.isLoading}
                onViewableItemsChanged={this.onViewableItemsChanged}
                onRefresh={this.onRefresh}
                onEndReached={this.onEndReached}
                initialNumToRender={10}
                scrollEventThrottle={1}
                onEndReachedThreshold={1}
                progressViewOffset={40}
                removeClippedSubviews={true}
                ListHeaderComponent={this.renderHeader}
                renderItem={this.renderItem} />
        );
    }
}

Posts.propTypes = propTypes;

export default Posts;
