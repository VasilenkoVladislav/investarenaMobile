import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';

class SplashScreen extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount() {
        this.props.validateToken();
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={70} color='grey' />
            </View>
        )
    }
}

export default SplashScreen;
