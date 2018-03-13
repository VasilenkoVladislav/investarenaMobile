import { View, Text } from 'react-native';
import React from 'react';
import Posts from './Posts';
import { styles } from './styles';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Main Screen</Text>
            <Posts/>
        </View>
    )
};

export default MainScreen;
