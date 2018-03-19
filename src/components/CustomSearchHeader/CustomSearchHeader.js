import { StatusBar, Animated } from 'react-native';
import React from 'react';
import { SearchBar } from 'react-native-elements';
import { styles } from './styles';

const CustomSearchHeader = ({state}) => {
    return (
        <Animated.View style={[
            styles.container,
                {
                    opacity: !state.routes[state.index].params ? 1 : state.routes[state.index].params.imageOpacity,
                    transform: [{translateY: !state.routes[state.index].params ? 0 : state.routes[state.index].params.animatedHeight }]
                }
            ]}>
            <StatusBar backgroundColor='#16254c'/>
            <SearchBar
                round={true}
                containerStyle={styles.searchBarContainer}
                inputStyle={{ backgroundColor: 'white' }}
                placeholder='Search users' />
        </Animated.View>
    );
};

export default CustomSearchHeader;
