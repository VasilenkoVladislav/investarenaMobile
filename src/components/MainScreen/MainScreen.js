import { View, StatusBar, Image, Text } from 'react-native';
import React from 'react';
import Posts from './Posts';
import { Input } from 'react-native-elements';
import { styles } from './styles';
import PropTypes from 'prop-types'

const propTypes = {
    currentUserInfo: PropTypes.object.isRequired
};

const MainScreen = ({currentUserInfo}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{uri:currentUserInfo.image_small}}/>
                <View>
                    <Text>
                        {`${currentUserInfo.name}what do you think about the financial market?`}
                    </Text>
                </View>
            </View>
            <StatusBar backgroundColor="#16254c"/>
            <Posts/>
        </View>
    );
};

MainScreen.propTypes = propTypes;

export default MainScreen;
