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
                tabBarIcon: ({ focused }) => <Icon type='font-awesome'
                                                   size={26}
                                                   name='newspaper-o'
                                                   color={focused? '#3a79ee' : 'grey'} />
            })
        },
        Favorites:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='star'
                                                   color={focused? '#3a79ee' : 'grey'} />
            })
        },
        Quotes:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='attach-money'
                                                   color={focused? '#3a79ee' : 'grey'} />
            })
        },
        Notifications:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='notifications'
                                                   color={focused? '#3a79ee' : 'grey'} />
            })
        },
        Settings:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon size={26}
                                                   name='settings'
                                                   color={focused? '#3a79ee' : 'grey'} />
            })
        },
    },
    {
        initialRouteName: 'Posts',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: 'white'
            },
            indicatorStyle: {
                opacity: 0
            },
        },
        tabBarPosition: 'bottom'
    }
);
