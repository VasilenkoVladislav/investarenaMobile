import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
                <Text>Loading...</Text>
            </View>
        )
    }
}

export default SplashScreen;
