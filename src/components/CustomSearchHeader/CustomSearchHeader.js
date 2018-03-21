import { StatusBar, Animated } from 'react-native';
import React from 'react';
import { SearchBar } from 'react-native-elements';
import { styles } from './styles';

const CustomSearchHeader = ({state}) => {
    return (
        <Animated.View style={[
            styles.container,
                {
                    opacity: !state.params ? 1 : state.params.imageOpacity,
                    transform: [{translateY: !state.params ? 0 : state.params.animatedHeight }]
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
