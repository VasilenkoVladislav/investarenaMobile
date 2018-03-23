import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width,
        height: 300,
        padding: 10,
        marginTop: 15
    },
    postHeaderWrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    userInfoWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 10
    },
    userAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    forecastWrap: {

    },
    image: {
        width: 50,
        height: 50,
    }
});
