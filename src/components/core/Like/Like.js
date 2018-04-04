import * as Animatable from 'react-native-animatable';
import { CustomTextBold } from '../../core/CustomText';
import { Icon } from 'react-native-elements';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    like: PropTypes.shape({
        liked: PropTypes.bool.isRequired,
        count: PropTypes.number.isRequired,
    }).isRequired,
    updateLike: PropTypes.func.isRequired,
    likedId: PropTypes.string.isRequired,
    likedType: PropTypes.string.isRequired
};

const Like = ({like, likedType, updateLike}) => {
    let view;
    const handleOnPress = () => {
        if (like && !like.isLoading) {
            view.swing(800);
            updateLike();
        }
    };
    return (
        <React.Fragment>
            {likedType === 'Post'
                ? <TouchableOpacity onPress={handleOnPress}>
                    <Animatable.View ref={ref => view = ref} style={styles.postLikeContainer}>
                        <Icon name='thumb-up' color={ like && like.liked ? '#3a79ee' : '#2c3552'} size={26} />
                        <CustomTextBold style={[styles.postLikeText, { color: like && like.liked ? '#3a79ee' : '#2c3552' }]}>Like</CustomTextBold>
                    </Animatable.View>
                </TouchableOpacity>
                : <CustomTextBold style={[styles.commentLikeText, { color: like && like.liked ? '#3a79ee' : '#2c3552' }]}>Like</CustomTextBold> }
        </React.Fragment>
    );
};

Like.propTypes = propTypes;

export default Like;

