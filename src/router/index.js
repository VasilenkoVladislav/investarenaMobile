import { StackNavigator, SwitchNavigator } from 'react-navigation'
import CreatePostScreen from '../components/CreatePostScreen';
import ImagePickerScreen from '../components/ImagePickerScreen';
import React from 'react';
import RegistrationScreen from '../components/RegistrationScreen';
import SignInScreen from '../components/SignInScreen';
import SplashScreen from '../components/SplashScreen';
import MainScreen from '../components/MainScreen/MainScreen';


const AppStack = StackNavigator({
    Main: {
        screen: MainScreen
    },
    CreatePost: {
        screen: CreatePostScreen
    },
    ImagePicker: {
        screen: ImagePickerScreen
    }
});

const AuthStack  = StackNavigator({
    Login: {
        screen: SignInScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Registration: {
        screen: RegistrationScreen
    },
});

export default SwitchNavigator(
    {
        Splash: {
            screen: SplashScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Splash',
    }
);
