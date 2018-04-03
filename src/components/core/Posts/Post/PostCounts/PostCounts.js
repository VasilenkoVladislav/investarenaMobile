import { View, TouchableOpacity } from 'react-native';
import { CustomText } from '../../../../core/CustomText';
import { Icon } from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    like: PropTypes.shape({
        liked: PropTypes.bool.isRequired,
        count: PropTypes.number.isRequired,
    }).isRequired,
    likedId: PropTypes.string.isRequired
};

const PostCounts = ({like}) => {
    return (<React.Fragment>
        {((like && like.count > 0))
            ? <View style={styles.container}>
                {like && like.count > 0 && <TouchableOpacity style={styles.likesCountWrap}>
                    <Icon name='thumb-up'
                          color='#ddd'
                          size={10}
                          containerStyle={styles.iconWrap}/>
                    <CustomText style={styles.text}>{like.count}</CustomText>
                </TouchableOpacity>}
                <CustomText style={styles.text}>11 comments</CustomText>
            </View>
            : null }
    </React.Fragment>)
};

PostCounts.propTypes = propTypes;

export default PostCounts;