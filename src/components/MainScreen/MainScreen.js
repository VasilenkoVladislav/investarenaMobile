import React, { Component } from 'react';
import { Animated } from 'react-native';
import { MainScreenTabs } from '../../router/tabs';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this._animatedValue = new Animated.Value(0);
    }
    componentWillMount() {
        this.props.navigation.setParams({
            animatedValue: this._animatedValue.interpolate({
                inputRange: [0, 60],
                outputRange: [0, -60],
                extrapolate: 'clamp'
            })
        });
    }
    render() {
        return (<MainScreenTabs screenProps={{scrollY: this._animatedValue}} />);
    }
}

export default MainScreen;
