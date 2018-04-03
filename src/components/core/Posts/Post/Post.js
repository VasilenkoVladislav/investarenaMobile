import { View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';
import { CustomText, CustomTextBold } from '../../CustomText';
import AvatarUser from '../../AvatarUser';
import { Bar } from 'react-native-progress';
import { Icon } from 'react-native-elements';
import { currentTime } from '../../../../helpers/currentTime';
import moment from 'moment';
import Like from '../../../core/Like';
import PostCounts from './PostCounts';
import PropTypes from 'prop-types';
import PostStatistics from './PostStatistics';
import PostQuoteInfo from './PostQuoteInfo';
import UserStatus from '../../UserStatus';
import { styles } from './styles';
import ModalManagePost from '../../Modals/ModalManagePost/ModalManagePost';
import ModalSharePost from '../../Modals/ModalSharePost/ModalSharePost';

const propTypes = {
    quote: PropTypes.object,
    quoteSettings: PropTypes.object,
    post: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    currentUserId: PropTypes.string.isRequired,
    currentUserName: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
    getPostDeals: PropTypes.func.isRequired
};

const { width } = Dimensions.get('window');

class Post extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            showBannedInfo: this.props.post.banned,
            isExpired: this.props.post.hasOwnProperty('expired_bars'),
            deals: []
        };
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
        let postQuoteInfo;
        let postStatistics;
        const isNotSimple = this.props.post.market !== 'Simple' &&
            this.props.quoteSettings &&
            this.props.quote &&
            this.props.quote.askPrice !== '0.000';
        if (isNotSimple) {
            postQuoteInfo = this.props.visible
                ? <PostQuoteInfo quote={this.props.quote}
                                 quoteSettings={this.props.quoteSettings}
                                 postPrice={this.props.post.price}
                                 forecast={this.props.post.forecast}
                                 recommend={this.props.post.recommend}
                                 profitability={this.props.post.profitability}
                                 isExpired={this.state.isExpired}/>
                : <View style={{height: 80}}/>;
            postStatistics = this.props.visible
                ? <PostStatistics quote={this.props.quote}
                                  quoteSettings={this.props.quoteSettings}
                                  postId={this.props.post.id}
                                  recommend={this.props.post.recommend}
                                  postPrice={this.props.post.price}/>
                : <View style={{height: 40}}/>;
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
                                <CustomText style={{fontSize: 10}}>Post created: 12 hrs</CustomText>
                            </View>
                        </View>
                    </View>
                    <Icon name='more-vert'
                          size={26}
                          onPress={() => this.props.showModal('ModalManagePost', {postId: this.props.post.id, userId: this.props.post.user_id})}/>
                </View>
                <View>
                    {postQuoteInfo}
                    <CustomText style={styles.postContent}>{this.props.post.content}</CustomText>
                    {this.props.post.image_medium && <Image style={styles.image} source={{uri: this.props.post.image_medium}} resizeMode="stretch"/>}
                    {postStatistics}
                    <PostCounts likedId={this.props.post.id}/>
                </View>
                <View style={styles.postFooterWrap}>
                    <Like likedId={this.props.post.id} likedType='Post'/>
                    <TouchableOpacity style={styles.postFooterBlock}
                                      onPress={() => this.props.showModal('ModalComments', { postId: this.props.post.id })}>
                        <Icon name='comment' color='#2c3552' size={26} />
                        <CustomTextBold style={{marginLeft: 5}}>Comment</CustomTextBold>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.postFooterBlock}
                                      onPress={() => this.props.showModal('ModalSharePost')}>
                        <Icon name='share' color='#2c3552' size={26}/>
                        <CustomTextBold style={{marginLeft: 5}}>Share</CustomTextBold>
                    </TouchableOpacity>
                </View>
            </View>
           );
    }
}

Post.propTypes = propTypes;

export default Post;
