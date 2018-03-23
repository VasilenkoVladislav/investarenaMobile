import { View, Image, Text, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';
import { Avatar } from 'react-native-elements';
import { images } from '../../../resources/images';
import React from 'react';
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

const Post = ({post, currentUserId, currentUserName, currentUserAvatar}) => {
    return (
        <View style={[ styles.container, { backgroundColor: post.created_at ? '#fff' : 'grey' }]}>
            { Platform.OS === 'android'
                ? !post.created_at && <ProgressBarAndroid styleAttr='Horizontal' color='#3a79ee'/>
                : !post.created_at && <ProgressViewIOS trackTintColor='#3a79ee'/> }
             <View style={styles.postHeaderWrap}>
                 <View style={styles.userInfoWrap}>
                     <Avatar
                         small
                         rounded
                         source={ post.author_avatar_small ? { uri: post.author_avatar_small }: images.avatar }
                         activeOpacity={0.7} />
                     <View style={{justifyContent: 'space-between'}}>
                         <Text style={{fontSize: 10}}>{currentUserId === post.user_id
                             ? currentUserName
                             : post.author_name}</Text>
                         <View style={{flexDirection: 'row'}}>
                             <View/>
                             <Text style={{fontSize: 10}}>Online</Text>
                             <Text style={{fontSize: 10}}>Post created: 12 hrs</Text>
                         </View>
                     </View>
                 </View>
                 <View style={styles.forecastWrap}>

                 </View>
             </View>
            <Text>{post.content}</Text>
            {post.image_medium && <Image style={styles.image} source={{uri: post.image_medium}} resizeMode="stretch"/>}
        </View>
    );
};

Post.propTypes = propTypes;

export default Post;
