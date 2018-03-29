import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import CustomSearchHeader from '../CustomSearchHeader';
import { MainScreenTabs } from '../../router/tabs';

class MainScreen extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        return {
            header: <CustomSearchHeader {...navigation}/>
        }
    };
    constructor(props) {
        super(props);
        this._animatedValue = new Animated.Value(0);
    }
    componentWillMount() {
        this.props.navigation.setParams({
            animatedHeight: this._animatedValue.interpolate({
                inputRange: [0, 60],
                outputRange: [0, -60],
                extrapolate: 'clamp'
            }),
            imageOpacity: this._animatedValue.interpolate({
                inputRange: [0, 30, 60],
                outputRange: [1, 0.5, 0],
                extrapolate: 'clamp'
            })
        });
    }
    render() {
        return (<MainScreenTabs screenProps={{scrollY: this._animatedValue}} />);
    }
}

export default MainScreen;
