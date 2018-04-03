import MenuTab from './Menu';
import NotificationsTab from './Notifications';
import React from 'react';
import Posts from '../core/Posts';
import { Icon } from 'react-native-elements'
import { TabNavigator } from 'react-navigation';

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
        Menu:  {
            screen: MenuTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='menu'
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
