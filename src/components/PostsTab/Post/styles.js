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
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3a79ee'
    },
    statusWrap: {
      flexDirection: 'row'
    },
    status: {
        width: 4,
        height: 4,
        borderRadius: 2,
        alignSelf: 'center',
        marginRight: 3
    },
    forecastWrap: {
        flexDirection: 'row'
    },
    contentWrap: {
      marginTop: 10
    },
    image: {
        width: 50,
        height: 50,
    }
});
