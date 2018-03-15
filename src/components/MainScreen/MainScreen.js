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
            inputRange: [0, 50],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        });
        return (
            <View style={{ flex: 1 }}>
                <CustomSearchHeader/>
                <Animated.View style={{
                    flex: 1,
                    height: height,
                    minHeight: height,
                    transform: [
                        {translateY: mapY},
                        {perspective: 1000}
                    ]}}>
                    <MainScreenTabs screenProps={{scrollY:this.state.scrollY}} />
                </Animated.View>
            </View>
        );
    }
}

export default MainScreen;
