import { View, Image, Text, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';
import React, { Component } from 'react';
import AvatarUser from '../../core/AvatarUser';
import { Icon } from 'react-native-elements';
import { currentTime } from '../../../helpers/currentTime';
import moment from 'moment';
import PostForecast from './PostForecast';
import PropTypes from 'prop-types';
import PostStatistics from './PostStatistics';
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
    getPostDeals: PropTypes.func.isRequired,
    currentUserId: PropTypes.string.isRequired,
    currentUserName: PropTypes.string.isRequired,
};

class Post extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showBannedInfo: this.props.post.banned,
            isExpired: this.props.post.hasOwnProperty('expired_bars'),
            deals: []
        };
    }
    componentDidMount () {
        this.setState({ isVisible: true });
        if (moment(this.props.post.created_at).add(10, 'seconds') < moment(currentTime.getTime())) {
            if (this.props.post.comments_count > 0) {
                // this.props.getComments(this.props.post.id);
            }
            if (this.props.post.market !== 'Simple') {
                this.props.getPostDeals(this.props.post.id);
            }
        }
    }
    render () {
        let blockForecast;
        let postQuoteInfo;
        let postStatistics;
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
                                           profitability = {this.props.post.profitability}
                                           isExpired={this.state.isExpired}/>;
            postStatistics = <PostStatistics quote={this.props.quote}
                                             postId = {this.props.post.id}
                                             recommend = {this.props.post.recommend}
                                             postPrice = {this.props.post.price}/>;
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
                    <Text style={styles.contentWrap}>{this.props.post.content}</Text>
                    {this.props.post.image_medium && <Image style={styles.image} source={{uri: this.props.post.image_medium}} resizeMode="stretch"/>}
                    {postStatistics}
                </View>
            </View>
        );
    }
}

Post.propTypes = propTypes;

export default Post;
