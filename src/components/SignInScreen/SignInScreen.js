import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { CustomText } from '../core/CustomText';
import PropTypes from 'prop-types';
import { images } from '../../resources/images';
import { Icon } from 'react-native-elements';
import { styles } from './styles';
import { validateRegistrationSignIn } from '../../constants/validateConstants';

const propTypes = {
    signIn: PropTypes.func.isRequired,
    oAuthSignIn: PropTypes.func.isRequired,
    pushScreen: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

class SignInScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true
        };
    }
    signInOnClick = () => {
        const emailValid = (validateRegistrationSignIn.email).test(this.state.email);
        const passwordValid = (validateRegistrationSignIn.password).test(this.state.password);
        this.setState({ emailValid, passwordValid});
        if (emailValid && passwordValid) {
            this.props.signIn(this.state.email, this.state.password);
            this.setState({ email: '', password: '' });
        }
    };
    render () {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#16254c"/>
                <View style={styles.loginContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={images.investArenaLogo}/>
                    </View>
                    <View style={styles.formContainer}>
                        <Input
                            value={this.state.email}
                            leftIcon={
                                <Icon
                                    type='feather'
                                    name='user'
                                    size={17}
                                    color='#FFFDFF'/>
                            }
                            inputStyle={styles.input}
                            placeholderTextColor='#CED7E0'
                            leftIconContainerStyle={styles.leftIconInputContainer}
                            keyboardAppearance='light'
                            autoFocus={false}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType='next'
                            placeholder={'Email'}
                            containerStyle={styles.inputContainerEmail}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            onChangeText={email => this.setState({ email })}
                            displayError={!this.state.emailValid}
                            errorMessage='Please enter a valid email address'/>
                        <Input
                            value={this.state.password}
                            leftIcon={
                                <Icon
                                    type='feather'
                                    name='lock'
                                    size={17}
                                    color='#FFFDFF'/>
                            }
                            inputStyle={styles.input}
                            placeholderTextColor='#CED7E0'
                            leftIconContainerStyle={styles.leftIconInputContainer}
                            keyboardAppearance='light'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            returnKeyType='done'
                            blurOnSubmit={true}
                            containerStyle={styles.inputContainerPassword}
                            placeholder={'Password'}
                            ref={input => this.passwordInput = input}
                            onSubmitEditing={() => this.signInOnClick()}
                            onChangeText={(password) => this.setState({password})}
                            displayError={!this.state.passwordValid}
                            errorMessage='Please enter at least 5 characters'/>
                        <Button
                            buttonStyle={styles.loginButton}
                            containerStyle={styles.loginButtonContainer}
                            activeOpacity={0.8}
                            title='LOGIN'
                            onPress={this.signInOnClick}
                            titleStyle={styles.loginTextButton}
                            loading={this.props.isLoading}
                            disabledStyle={{backgroundColor: '#3a79ee'}}
                            disabled={this.props.isLoading}/>
                        <CustomText style={styles.textSignUp}>Or SignUp using</CustomText>
                        <View style={styles.socialIconContainer}>
                            <TouchableOpacity style={styles.socialIconFacebookWrap}
                                      onPress={() => this.props.oAuthSignIn('facebook')}>
                                <Icon name='facebook'
                                      type='font-awesome'
                                      size={25}
                                      color='white'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconVKWrap}
                                      onPress={() => this.props.oAuthSignIn('vk')}>
                                <Icon name='vk'
                                      type='font-awesome'
                                      size={25}
                                      color='white'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconOdnoklassnikiWrap}
                                      onPress={() => this.props.oAuthSignIn('odnoklassniki')}>
                                <Icon name='odnoklassniki'
                                      type='font-awesome'
                                      size={25}
                                      color='white'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialIconGoogleWrap}
                                      onPress={() => this.props.oAuthSignIn('google')}>
                                <Icon name='google-plus'
                                      type='font-awesome'
                                      size={25}
                                      color='white'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.footerContainer}>
                        <CustomText style={styles.textSignUp}>
                            New here?
                        </CustomText>
                        <Button
                            title="Create an Account"
                            clear
                            activeOpacity={0.5}
                            titleStyle={styles.SignUpTextButton}
                            containerStyle={styles.SignUpButtonContainer}
                            onPress={this.props.pushScreen.bind(this, 'Registration')}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

SignInScreen.propTypes = propTypes;

export default SignInScreen;
