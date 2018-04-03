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

const ModalReplies = ({modalInfo, hideModal}) => {
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
            <View style={{flex: 1, backgroundColor: 'white'}}>

            </View>
        </Modal>
    )
};

ModalReplies.propTypes = propTypes;

export default ModalReplies;
