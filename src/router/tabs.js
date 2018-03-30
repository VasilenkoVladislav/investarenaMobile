import { TabNavigator } from 'react-navigation';
import React from 'react';
import PostsTab from '../components/PostsTab';
import NotificationsTab from '../components/NotificationsTab';
import { Icon } from 'react-native-elements'

export const MainScreenTabs = TabNavigator(
    {
        Posts: {
            screen: PostsTab,
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
