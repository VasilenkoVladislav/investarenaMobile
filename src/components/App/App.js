import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import { addListener } from '../../redux/utils/reactNavigation';
import AppNavigator from '../../router';
import { BackHandler } from "react-native";
import { currentTime } from '../../helpers/currentTime';

class App extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        currentTime.startCountdown();
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };
    render () {
        const { dispatch, nav } = this.props;
        const navigation = addNavigationHelpers({ dispatch, state: nav, addListener });
        return (
            <AppNavigator navigation={navigation}/>
        );
    }
}

export default App;
