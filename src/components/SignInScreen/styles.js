import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        backgroundColor: '#2D3D54'
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 2,
        alignItems:'center',
    },
    input: {
        fontFamily: 'OpenSans-Regular',
        color: '#CED7E0',
        padding: 0
    },
    errorInput: {
        position: 'absolute',
        margin: 0,
        top: 40
    },
    leftIconInputContainer: {
        marginLeft: 0
    },
    inputContainerEmail: {
        width: SCREEN_WIDTH - 70,
    },
    inputContainerPassword: {
        marginTop: 15,
        width: SCREEN_WIDTH - 70,
    },
    loginButtonContainer: {
        marginVertical: 30,
        width: SCREEN_WIDTH - 70,
    },
    loginButton: {
        backgroundColor: '#3a79ee',
        borderRadius: 5,
        height: 40,
    },
    loginTextButton: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: 'white'
    },
    socialIconContainer: {
        width: SCREEN_WIDTH - 70,
        marginTop: 30,
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpTextButton: {
        fontSize: 16,
        fontFamily: 'OpenSans-Bold',
        color: 'white'
    },
});
