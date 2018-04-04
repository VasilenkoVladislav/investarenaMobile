import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3D54'
    },
    loginContainer: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    formContainer: {
        width: SCREEN_WIDTH - 30,
        marginVertical: 25,
        alignItems:'center',
    },
    input: {
        fontFamily: 'OpenSans-Regular',
        color: '#CED7E0',
        padding: 0,
    },
    leftIconInputContainer: {
        marginLeft: 0
    },
    inputContainerEmail: {
    },
    inputContainerPassword: {
        marginTop: 15,
    },
    loginButtonContainer: {
        marginVertical: 25,
    },
    loginButton: {
        backgroundColor: '#3a79ee',
        borderRadius: 5,
        height: 40,
        width: 260,
    },
    loginTextButton: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: 'white'
    },
    socialIconContainer: {
        width: 250,
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    socialIconFacebookWrap: {
        width: 50,
        height: 50,
        backgroundColor: '#3b5998',
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'center'
    },
    socialIconVKWrap: {
        width: 50,
        height: 50,
        backgroundColor: '#4c75a3',
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'center'
    },
    socialIconOdnoklassnikiWrap: {
        width: 50,
        height: 50,
        backgroundColor: '#f58220',
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'center'
    },
    socialIconGoogleWrap: {
        width: 50,
        height: 50,
        backgroundColor: '#bf3322',
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'center'
    },
    textSignUp: {
        color: '#8C96AF'
    },
    footerContainer: {
        alignItems: 'center',
    },
    SignUpButtonContainer: {
        marginTop: -5
    },
    SignUpTextButton: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: 'white'
    },
});
