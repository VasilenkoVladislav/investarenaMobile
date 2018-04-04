import { ScrollView, View, TouchableOpacity } from 'react-native';
import { CustomText, CustomTextBold } from '../../core/CustomText';
import AvatarUser from '../../core/AvatarUser';
import { ListItem } from 'react-native-elements'
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    currentUserName: PropTypes.string.isRequired,
    goScreen: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
};

const Menu = ({currentUserName, signOut}) => {
    list = [
        {
            title: 'News Feed',
            titleStyle: { fontFamily: 'OpenSans-Regular', color: 'black' },
            icon: {name: 'library-books', color: '#2c3552', size: 26},
            chevron: true
        },
        {
            title: 'Broker',
            titleStyle: { fontFamily: 'OpenSans-Regular', color: 'black' },
            icon: {name: 'monetization-on', color: '#2c3552', size: 26},
            chevron: true
        },
        {
            title: 'Groups',
            titleStyle: { fontFamily: 'OpenSans-Regular', color: 'black' },
            icon: {name: 'group', color: '#2c3552', size: 26},
            chevron: true
        },
        {
            title: 'Companies',
            titleStyle: { fontFamily: 'OpenSans-Regular', color: 'black' },
            icon: {name: 'domain', color: '#2c3552', size: 26},
            chevron: true
        },
        {
            title: 'Settings',
            titleStyle: { fontFamily: 'OpenSans-Regular', color: 'black' },
            icon: {name: 'settings', color: '#2c3552', size: 26},
            chevron: true
        },
        {
            title: 'Help',
            titleStyle: { fontFamily: 'OpenSans-Regular', color: 'black' },
            icon: {name: 'help', color: '#2c3552', size: 26},
            chevron: true
        },
        {
            title: 'Feedback',
            titleStyle: { fontFamily: 'OpenSans-Regular', color: 'black' },
            icon: {name: 'feedback', color: '#2c3552', size: 26},
            chevron: true
        },
        {
            title: 'Logout',
            titleStyle: { fontFamily: 'OpenSans-Regular', color: 'black' },
            icon: {name: 'power-settings-new', color: '#2c3552', size: 26},
            chevron: true,
            onPress: () => signOut()
        }
    ];
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.userInfoWrap}>
                <AvatarUser
                    size='medium'
                    componentProps={{
                        rounded: true,
                        containerStyle: styles.avatarUserContainer,
                        activeOpacity: 0.7 }}/>
                <View>
                    <CustomTextBold>{currentUserName}</CustomTextBold>
                    <CustomText style={styles.profileText}>Your profile</CustomText>
                </View>
            </TouchableOpacity>
            <View style={styles.listWrap}>
                {
                    list.map((item, i) => (
                        <ListItem
                            scaleProps={{activeScale: 0.95}}
                            key={i}
                            onPress={item.onPress}
                            bottomDivider={true}
                            chevron={item.chevron}
                            title={item.title}
                            titleStyle={{...item.titleStyle}}
                            leftIcon={{...item.icon}}/>
                    ))
                }
            </View>

        </ScrollView>
    )
};

Menu.propTypes = propTypes;

export default Menu;
