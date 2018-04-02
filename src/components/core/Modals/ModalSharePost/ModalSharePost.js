import { View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import { CustomText } from '../../CustomText';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    modalInfo: PropTypes.shape({
        isOpen: PropTypes.bool.isRequired,
        data: PropTypes.object
    }).isRequired,
    hideModal: PropTypes.func.isRequired
};

const ModalSharePost = ({modalInfo, hideModal}) => {
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
                    <View style={styles.socialIconFacebookWrap}>
                        <Icon name='facebook' type='font-awesome' size={16} color='white'/>
                    </View>
                    <CustomText>Facebook</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemWrap}>
                    <View style={styles.socialIconVKWrap}>
                        <Icon name='vk' type='font-awesome' size={16} color='white'/>
                    </View>
                    <CustomText>VK</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemWrap}>
                    <View style={styles.socialIconOdnoklassnikiWrap}>
                        <Icon name='odnoklassniki' type='font-awesome' size={16} color='white'/>
                    </View>
                    <CustomText>Odnoklassniki</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemWrap}>
                    <View style={styles.socialIconGoogleWrap}>
                        <Icon name='google-plus' type='font-awesome' size={16} color='white'/>
                    </View>
                    <CustomText>Google Plus</CustomText>
                </TouchableOpacity>
            </View>
        </Modal>
    )
};

ModalSharePost.propTypes = propTypes;

export default ModalSharePost;
