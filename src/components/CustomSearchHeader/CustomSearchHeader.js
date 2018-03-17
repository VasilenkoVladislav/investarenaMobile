import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StatusBar, Animated } from 'react-native';

const CustomSearchHeader = ({translateY}) => {
    return (
        <Animated.View style={{
            position: 'absolute',
            height: 80,
            left: 0,
            right: 0,
            transform: [{translateY}]}}>
            <StatusBar backgroundColor='#16254c'/>
            <SearchBar
                round={true}
                containerStyle={{ backgroundColor: '#16254c', borderTopWidth: 0}}
                inputStyle={{ backgroundColor: 'white' }}
                placeholder='Search users' />
        </Animated.View>
    );
};

export default CustomSearchHeader;
