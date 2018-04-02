import { View, TouchableOpacity, Clipboard } from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import config from '../../../../configApi/config';
import { CustomText } from '../../CustomText';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    modalInfo: PropTypes.shape({
        isOpen: PropTypes.bool.isRequired,
        data: PropTypes.object
    }).isRequired,
    currentUserId: PropTypes.string,
    deletePost: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
};

const ModalManagePost = ({modalInfo, hideModal, deletePost, currentUserId}) => {
    const onClickDeletePost = () => {
        deletePost(modalInfo.data.postId);
        hideModal();
    };
    const onClickCopyLink = async () => {
        await Clipboard.setString(`${config.siteUrlPost}${modalInfo.data.postId}`);
        hideModal();
    };
    return (
        <Modal
            useNativeDriver={true}
            style={styles.container}
            animationIn={'bounceInUp'}
            animationOut={'fadeOutDown'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            isVisible={modalInfo.isOpen}
            onBackButtonPress={hideModal}
            onBackdropPress={hideModal}>
            <View style={styles.itemsWrap}>
                <TouchableOpacity style={styles.itemWrap}>
                    <Icon name='bookmark' size={26} color='#2c3552' containerStyle={styles.icon}/>
                    <CustomText>Save post</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemWrap}>
                    <Icon name='block' size={26} color='#2c3552' containerStyle={styles.icon}/>
                    <CustomText>Complain</CustomText>
                </TouchableOpacity>
                { currentUserId === modalInfo.data.userId &&
                    <TouchableOpacity style={styles.itemWrap}>
                        <Icon name='create' size={26} color='#2c3552' containerStyle={styles.icon}/>
                        <CustomText>Update</CustomText>
                    </TouchableOpacity> }
                { currentUserId === modalInfo.data.userId &&
                    <TouchableOpacity style={styles.itemWrap} onPress={onClickDeletePost}>
                        <Icon name='delete' size={26} color='#2c3552' containerStyle={styles.icon}/>
                        <CustomText>Delete</CustomText>
                    </TouchableOpacity> }
                <TouchableOpacity style={styles.itemWrap} onPress={onClickCopyLink}>
                    <Icon name='link' size={26} color='#2c3552' containerStyle={styles.icon}/>
                    <CustomText>Copy link</CustomText>
                </TouchableOpacity>
            </View>
        </Modal>
    )
};

ModalManagePost.propTypes = propTypes;

export default ModalManagePost;
