import { CustomText } from '../../core/CustomText';
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { styles } from './styles';

const propTypes = {
    userStatus: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired
};

const UserStatus = ({statusStyle, textStyle, userStatus}) => {
    return (
        <React.Fragment>
            <View style={[statusStyle || styles.status, { backgroundColor: userStatus ? '#3bbc53' : '#e93700' }]}/>
            <CustomText style={[textStyle || styles.statusText, { color: userStatus ? '#3bbc53' : '#e93700' }]}>
                {userStatus ? 'Online' : 'Offline'}
            </CustomText>
        </React.Fragment>
    );
};

UserStatus.propTypes = propTypes;

export default UserStatus;
