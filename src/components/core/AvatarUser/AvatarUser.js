import { Avatar } from 'react-native-elements';
import React from 'react';
import { images } from '../../../resources/images';
import PropTypes from 'prop-types';

const propTypes = {
    currentUserAvatar: PropTypes.shape({
        small: PropTypes.string,
        medium: PropTypes.string,
        large: PropTypes.string
    }).isRequired,
    size: PropTypes.string.isRequired,
    currentUserId: PropTypes.string.isRequired,
    userAvatar: PropTypes.string,
    userId: PropTypes.string,
    componentProps: PropTypes.object
};

const AvatarUser = ({currentUserId, currentUserAvatar, userAvatar, userId, size, componentProps}) => {
    componentProps[size] = true;
    if (!userId || (userId && userId === currentUserId)) {
        componentProps.source = currentUserAvatar[size] ? { uri: currentUserAvatar[size] }: images.avatar;
    } else if (userId && userId !== currentUserId ) {
        componentProps.source = userAvatar ? { uri: userAvatar }: images.avatar;
    }
    return (<Avatar {...componentProps}/>);
};

AvatarUser.propTypes = propTypes;

export default AvatarUser;
