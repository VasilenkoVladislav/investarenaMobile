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
                tabBarIcon: ({ focused }) => {
                    return <Icon type='font-awesome' name='newspaper-o' color={focused? '#3a79ee' : 'grey'} />
                }
            })
        },
        Favorites:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon name='star' color={focused? '#3a79ee' : 'grey'} />
            })
        },
        Quotes:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon name='attach-money' color={focused? '#3a79ee' : 'grey'} />
            })
        },
        Notifications:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon name='notifications' color={focused? '#3a79ee' : 'grey'} />
            })
        },
        Settings:  {
            screen: NotificationsTab,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => <Icon name='settings' color={focused? '#3a79ee' : 'grey'} />
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
