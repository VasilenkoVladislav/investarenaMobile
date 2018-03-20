import { View, Image, FlatList, Animated, Text } from 'react-native';
import React, { Component } from 'react';
import { Input, Icon } from 'react-native-elements';
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
                    <View style={styles.createPostTextWrap}>
                        <Text style={styles.createPostText} onPress={() => this.props.goScreen('CreatePost')}>
                            What do you think?
                        </Text>
                    </View>
                    <Icon name='image' color='#2c3552' size={30} onPress={() => this.props.goScreen('ImagePicker')}/>
                    <Icon name='attachment' color='#2c3552' size={30}/>
                </View>}
                renderItem={({item}) => <Post post={item}/>}/>
        );
    }
}

PostsTab.propTypes = propTypes;

export default PostsTab;
