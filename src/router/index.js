import { StackNavigator } from 'react-navigation'
import MainScreen from '../components/MainScreen';
import SplashScreen from '../components/SplashScreen';
import SignInScreen from '../components/SignInScreen';
import RegistrationScreen from '../components/RegistrationScreen';

export const AppNavigator = StackNavigator({
    Splash: {
        screen: SplashScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: SignInScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Main: {
        screen: MainScreen,
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