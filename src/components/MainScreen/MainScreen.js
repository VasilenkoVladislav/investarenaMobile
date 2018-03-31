import { TabNavigator } from 'react-navigation';
import React from 'react';
import Posts from '../core/Posts';
import NotificationsTab from './Notifications';
import { Icon } from 'react-native-elements'

export default MainScreen = TabNavigator(
    {
        Posts: {
            screen: Posts,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='list'
                                                   color={focused? 'white' : '#999'} />
            })
        },
        Favorites:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='star'
                                                   color={focused? 'white' : '#999'} />
            })
        },
        Quotes:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='attach-money'
                                                   color={focused? 'white' : '#999'} />
            })
        },
        Notifications:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='notifications'
                                                   color={focused? 'white' : '#999'} />
            })
        },
        Settings:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='settings'
                                                   color={focused? 'white' : '#999'} />
            })
        },
    },
    {
        initialRouteName: 'Posts',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: '#16254c'
            },
            indicatorStyle: {
                opacity: 0
            },
        },
        tabBarPosition: 'bottom'
    }
);
