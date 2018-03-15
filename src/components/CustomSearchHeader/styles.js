import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    searchContainer: {
        width: SCREEN_WIDTH,
    },
    searchBarContainer: {
        backgroundColor: '#16254c',
        borderTopWidth: 0
    }
});
