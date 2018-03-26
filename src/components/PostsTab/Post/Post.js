import { View, Image, Text, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';
import React, { Component } from 'react';
import AvatarUser from '../../core/AvatarUser';
import { Icon } from 'react-native-elements';
import PostForecast from './PostForecast';
import PropTypes from 'prop-types';
import PostQuoteInfo from './PostQuoteInfo';
import UserStatus from '../../core/UserStatus';
import { styles } from './styles';

const propTypes = {
    quote: PropTypes.object,
    quoteSettings: PropTypes.object,
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
        let postQuoteInfo;
        const isNotSimple = this.props.post.market !== 'Simple' &&
            this.props.quoteSettings &&
            this.props.quote &&
            this.props.quote.askPrice !== '0.000';
        if (isNotSimple) {
            blockForecast = <PostForecast postForecast={this.props.post.forecast} />;
            postQuoteInfo = <PostQuoteInfo quote={this.props.quote}
                                           quoteSettings={this.props.quoteSettings}
                                           postPrice = {this.props.post.price}
                                           forecast = {this.props.post.forecast}
                                           recommend = {this.props.post.recommend}
                                           profitability = {this.props.post.profitability}/>
        }
        return (
            <View style={[ styles.container, { backgroundColor: this.props.post.created_at ? '#fff' : 'grey' }]}>
                { Platform.OS === 'android'
                    ? !this.props.post.created_at && <ProgressBarAndroid styleAttr='Horizontal' color='#3a79ee'/>
                    : !this.props.post.created_at && <ProgressViewIOS trackTintColor='#3a79ee'/> }
                <View style={styles.postHeaderWrap}>
                    <View style={styles.userInfoWrap}>
                        <AvatarUser
                            userAvatar={this.props.post.author_avatar_small}
                            userId={this.props.post.user_id}
                            size='small'
                            componentProps={{
                                rounded: true,
                                containerStyle: { marginRight: 5 },
                                activeOpacity: 0.7 }}/>
                        <View>
                            <Text style={styles.userName}>
                                {this.props.currentUserId === this.props.post.user_id
                                    ? this.props.currentUserName
                                    : this.props.post.author_name}
                            </Text>
                            <View style={styles.statusWrap}>
                                <UserStatus userId={this.props.post.user_id}/>
                                <Text style={{fontSize: 10}}>Post created: 12 hrs</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.forecastWrap}>
                        {blockForecast}
                        <Icon name='more-vert' size={20}/>
                    </View>
                </View>
                <View>
                    {postQuoteInfo}
                    <Text>{this.props.post.content}</Text>
                    {this.props.post.image_medium && <Image style={styles.image} source={{uri: this.props.post.image_medium}} resizeMode="stretch"/>}
                </View>
            </View>
        );
    }
}

Post.propTypes = propTypes;

export default Post;
