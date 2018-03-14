import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    image: {
        width: 50,
        height: 50
    }
});
