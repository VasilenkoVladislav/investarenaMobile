import { TabNavigator } from 'react-navigation';
import React from 'react';
import PostsTab from '../components/PostsTab';
import NotificationsTab from '../components/NotificationsTab';

export const MainScreenTabs = TabNavigator(
    {
        Posts: PostsTab,
        Notifications:  NotificationsTab
    }, {
        initialRouteName: 'Posts'
    }
);