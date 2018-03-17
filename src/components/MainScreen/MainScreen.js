import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import CustomSearchHeader from '../CustomSearchHeader';
import { MainScreenTabs } from '../../router/tabs';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this._animatedValue = new Animated.Value(0);
    }
    render() {
        const translateY = this._animatedValue.interpolate({
            inputRange: [0, 80],
            outputRange: [0, -80],
            extrapolate: 'clamp'
        });
        return (
            <View style={{flex:1}}>
                <CustomSearchHeader translateY={translateY}/>
                <MainScreenTabs screenProps={{scrollY: this._animatedValue}} />
            </View>);
    }
}

export default MainScreen;
