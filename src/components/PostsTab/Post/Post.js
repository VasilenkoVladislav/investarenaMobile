import { View, Image, Text, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';
import React, { Component } from 'react';
import { Avatar, Icon } from 'react-native-elements';
import { images } from '../../../resources/images';
import PostForecast from './PostForecast';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    post: PropTypes.object.isRequired,
    currentUserAvatar: PropTypes.shape({
        small: PropTypes.string,
        medium: PropTypes.string,
        large: PropTypes.string
    }),
    currentUserId: PropTypes.string.isRequired,
    currentUserName: PropTypes.string.isRequired,
};

class Post extends Component {
    render () {
        let blockForecast;
        const isNotSimple = this.props.post.market !== 'Simple';
        if (isNotSimple) {
            blockForecast = <PostForecast postForecast={this.props.post.forecast} />
        }
        return (
            <View style={[ styles.container, { backgroundColor: this.props.post.created_at ? '#fff' : 'grey' }]}>
                { Platform.OS === 'android'
                    ? !this.props.post.created_at && <ProgressBarAndroid styleAttr='Horizontal' color='#3a79ee'/>
                    : !this.props.post.created_at && <ProgressViewIOS trackTintColor='#3a79ee'/> }
                <View style={styles.postHeaderWrap}>
                    <View style={styles.userInfoWrap}>
                        <Avatar
                            containerStyle={{marginRight: 5}}
                            small
                            rounded
                            source={ this.props.post.author_avatar_small ? { uri: this.props.post.author_avatar_small }: images.avatar }
                            activeOpacity={0.7} />
                        <View>
                            <Text style={styles.userName}>{this.props.currentUserId === this.props.post.user_id
                                ? this.props.currentUserName
                                : this.props.post.author_name}</Text>
                            <View style={styles.statusWrap}>
                                <View style={[styles.status, { backgroundColor: this.props.post.status_user.online ? '#3bbc53' : '#e93700' }]}/>
                                <Text style={{fontSize: 10, marginRight: 5, color:  this.props.post.status_user.online ? '#3bbc53' : '#e93700'}}>
                                    {this.props.post.status_user.online ? 'Online' : 'Offline'}
                                </Text>
                                <Text style={{fontSize: 10}}>Post created: 12 hrs</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.forecastWrap}>
                        {blockForecast}
                        <Icon name='more-vert' size={20}/>
                    </View>
                </View>
                <Text>{this.props.post.content}</Text>
                {this.props.post.image_medium && <Image style={styles.image} source={{uri: this.props.post.image_medium}} resizeMode="stretch"/>}
            </View>
        );
    }
}

Post.propTypes = propTypes;

export default Post;
