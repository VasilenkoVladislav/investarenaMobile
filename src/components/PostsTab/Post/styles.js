import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width,
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
        fontSize: 12,
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
    postContainerWrap: {
        marginTop: 15
    },
    image: {
        width: width - 20,
        height: 350,
    },
    postFooterWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    postFooterBlock: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    socialIconFacebookWrap: {
        width: 25,
        height: 25,
        backgroundColor: '#3b5998',
        borderRadius: 4,
        marginLeft: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
    socialIconVKWrap: {
        width: 25,
        height: 25,
        backgroundColor: '#4c75a3',
        borderRadius: 4,
        marginLeft: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
    socialIconOdnoklassnikiWrap: {
        width: 25,
        height: 25,
        backgroundColor: '#f58220',
        borderRadius: 4,
        marginLeft: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
    socialIconGoogleWrap: {
        width: 25,
        height: 25,
        backgroundColor: '#bf3322',
        borderRadius: 4,
        marginLeft: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
});
