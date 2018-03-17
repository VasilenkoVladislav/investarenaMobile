import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StatusBar, Animated } from 'react-native';

const CustomSearchHeader = ({state}) => {
    return (
        <Animated.View style={{
            position: 'absolute',
            height: 60,
            top: 0,
            left: 0,
            right: 0,
            transform: [{translateY: !state.routes[state.index].params ? 0 : state.routes[state.index].params.animatedValue }]}}>
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
