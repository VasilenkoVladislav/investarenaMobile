import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width,
        height: 300,
        marginTop: 15
    },
    image: {
        width: 50,
        height: 50,
    }
});
