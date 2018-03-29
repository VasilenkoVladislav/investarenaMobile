import { View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { CustomText, CustomTextBold } from '../../core/CustomText';
import AvatarUser from '../../core/AvatarUser';
import { Bar } from 'react-native-progress';
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
    visible: PropTypes.bool.isRequired,
    post: PropTypes.object.isRequired,
    getPostDeals: PropTypes.func.isRequired,
    currentUserId: PropTypes.string.isRequired,
    currentUserName: PropTypes.string.isRequired,
};

const { width } = Dimensions.get('window');

class Post extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showBannedInfo: this.props.post.banned,
            isExpired: this.props.post.hasOwnProperty('expired_bars'),
            deals: []
        };
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.visible !== this.props.visible;
    }
    componentDidMount () {
        if (moment(this.props.post.created_at).add(10, 'seconds') < moment(currentTime.getTime())) {
            if (this.props.post.comments_count > 0) {
                // this.props.getComments(this.props.post.id);
            }
            if (this.props.post.market !== 'Simple' && this.props.post.deals_count > 0) {
                this.props.getPostDeals(this.props.post.id);
            }
        }
    }
    render () {
        let blockForecast;
        let postQuoteInfo;
        let postStatistics;
        const isNotSimple = this.props.post.market !== 'Simple';
        if (isNotSimple) {
            blockForecast = this.props.visible && <PostForecast postForecast={this.props.post.forecast} />;
            postQuoteInfo = this.props.visible
                ? <PostQuoteInfo postPrice={this.props.post.price}
                                 postId={this.props.post.id}
                                 quoteSecurity={this.props.post.quote}
                                 forecast={this.props.post.forecast}
                                 recommend={this.props.post.recommend}
                                 profitability={this.props.post.profitability}
                                 isExpired={this.state.isExpired}/>
                : <View style={{height: 35}}/>;
            postStatistics = this.props.visible
                ? <PostStatistics postId={this.props.post.id}
                                  quoteSecurity={this.props.post.quote}
                                  recommend={this.props.post.recommend}
                                  postPrice={this.props.post.price}/>
                : <View style={{height: 35}}/>;
        }
        return (
            <View style={[ styles.container, { backgroundColor: this.props.post.created_at ? '#fff' : 'grey' }]}>
                {!this.props.post.created_at &&
                <Bar color='#3a79ee'
                     indeterminate={true}
                     useNativeDriver={true}
                     width={width-40}
                     style={{alignSelf: 'center', marginBottom: 10}}/>}
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
                            <CustomTextBold style={styles.userName}>
                                {this.props.currentUserId === this.props.post.user_id
                                    ? this.props.currentUserName
                                    : this.props.post.author_name}
                            </CustomTextBold>
                            <View style={styles.statusWrap}>
                                <UserStatus userId={this.props.post.user_id || this.props.currentUserId}/>
                                <CustomText style={{fontSize: 8}}>Post created: 12 hrs</CustomText>
                            </View>
                        </View>
                    </View>
                    <View style={styles.forecastWrap}>
                        {blockForecast}
                        <Icon name='more-vert' size={20}/>
                    </View>
                </View>
                <View style={styles.postContainerWrap}>
                    {postQuoteInfo}
                    <CustomText>{this.props.post.content}</CustomText>
                    {this.props.post.image_medium && <Image style={styles.image} source={{uri: this.props.post.image_medium}} resizeMode="stretch"/>}
                    {postStatistics}
                </View>
                <View style={styles.postFooterWrap}>
                    <View style={styles.postFooterBlock}>
                        <Icon name='thumb-up' color='#2c3552' size={22} />
                        <CustomTextBold style={{fontSize: 12, marginLeft: 3, marginRight: 5}}>1000</CustomTextBold>
                        <Icon name='comment' color='#2c3552' size={22} />
                        <CustomTextBold style={{fontSize: 12, marginLeft: 3}}>1000</CustomTextBold>
                    </View>
                    <View style={styles.postFooterBlock}>
                        <CustomText style={{fontSize: 12}}>Share with:</CustomText>
                        <TouchableOpacity style={styles.socialIconFacebookWrap}
                                          onPress={() => console.log('share')}>
                            <Icon name='facebook'
                                  type='font-awesome'
                                  size={16}
                                  color='white'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIconVKWrap}
                                          onPress={() => console.log('share')}>
                            <Icon name='vk'
                                  type='font-awesome'
                                  size={16}
                                  color='white'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIconOdnoklassnikiWrap}
                                          onPress={() => console.log('share')}>
                            <Icon name='odnoklassniki'
                                  type='font-awesome'
                                  size={16}
                                  color='white'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIconGoogleWrap}
                                          onPress={() => console.log('share')}>
                            <Icon name='google-plus'
                                  type='font-awesome'
                                  size={16}
                                  color='white'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           );
    }
}

Post.propTypes = propTypes;

export default Post;
