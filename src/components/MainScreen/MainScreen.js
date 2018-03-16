import { Animated, View, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { MainScreenTabs } from '../../router/tabs';
import CustomSearchHeader from '../CustomSearchHeader';

const { height } = Dimensions.get('window');

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { scrollY: new Animated.Value(0) }
    }
    render() {
        const mapY = this.state.scrollY.interpolate({
            inputRange: [0, 60],
            outputRange: [0, -60],
            extrapolate: 'clamp',
        });
        return (
            <View style={{ flex: 1 }}>
                <Animated.View style={{
                    height: 60,
                    transform: [
                        {translateY: mapY},
                        {perspective: 1000}, // needed for Android
                    ],
                }}>
                    <CustomSearchHeader/>
                </Animated.View>
                    <MainScreenTabs screenProps={{scrollY:this.state.scrollY}} />
            </View>
        );
    }
}

export default MainScreen;
