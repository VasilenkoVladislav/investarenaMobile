import { ScrollView, View, Image, TextInput } from 'react-native';
import React, { Component } from 'react';
import { CustomTextBold } from '../core/CustomText';
import AvatarUser from '../core/AvatarUser';
import HeaderRight from './HeaderRight';
import { styles } from './styles';
import PropTypes from 'prop-types';

const propTypes = {
    createPost: PropTypes.func.isRequired,
    currentUserAvatar: PropTypes.shape({
        small: PropTypes.string,
        medium: PropTypes.string,
        large: PropTypes.string
    }),
    currentUserName: PropTypes.string.isRequired,
};

class CreatePostScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Create Post',
            headerTintColor: 'white',
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.header,
            headerRight: <HeaderRight {...navigation} />
        }
    };
    constructor (props) {
        super (props);
        this.state = { content: '', contentValid: false };
    }
    componentDidMount () {
        const { createPost, navigation } = this.props;
        const { params } = navigation.state;
        this.props.navigation.setParams({ createPost, image: params && params.selectedImage.node.image.uri});
    }
    handleOnChangeContent = (content) => {
        const { params } = this.props.navigation.state;
        const contentValid = !!(content.length > 0 || (params && params.selectedImage));
        this.props.navigation.setParams({ content, contentValid });
        this.setState({ content, contentValid });
    };
    render () {
        const { params } = this.props.navigation.state;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.currentUserInfoWrap}>
                    <AvatarUser
                        size='small'
                        componentProps={{
                            containerStyle: styles.currentUserAvatar,
                            rounded: true,
                            activeOpacity: 0.7 }}/>
                    <CustomTextBold>{this.props.currentUserName}</CustomTextBold>
                </View>
                <TextInput
                    style={styles.inputWrap}
                    underlineColorAndroid='transparent'
                    placeholder='What do you think?'
                    multiline={true}
                    maxLength={64000}
                    onChangeText={this.handleOnChangeContent}
                    value={this.state.content}/>
                <View style={styles.imagesWrap}>
                    {params && params.selectedImage && <Image style={styles.image} source={{uri: params.selectedImage.node.image.uri}}/>}
                </View>
            </ScrollView>
        )
    }
}

CreatePostScreen.propTypes = propTypes;

export default CreatePostScreen;
