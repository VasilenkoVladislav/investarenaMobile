import { StackNavigator, SwitchNavigator } from 'react-navigation'
import MainScreen from '../components/MainScreen';
import React from 'react';
import RegistrationScreen from '../components/RegistrationScreen';
import SignInScreen from '../components/SignInScreen';
import SplashScreen from '../components/SplashScreen';
import CustomSearchHeader from '../components/CustomSearchHeader';

const AppStack = StackNavigator({
    Main: {
        screen: MainScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
        // navigationOptions: {
        //     header: ({navigation}) => <CustomSearchHeader {...navigation}/>
        // }
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