import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import { images } from '../../resources/images';
import { styles } from './styles';

class CreatePostScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Create Post',
            headerTintColor: 'white',
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.header,
            headerRight: <TouchableOpacity style={styles.customHeader}
                               onPress={() => navigation.replace('Main')}>
                <Text style={styles.customHeaderText}>Share</Text>
            </TouchableOpacity>
        }
    };
    constructor (props) {
        super (props);
        this.state = { content: '' };
    }
    render () {
        const { params } = this.props.navigation.state;
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Image style={styles.creatPostImage}
                           source={ this.props.currentUserInfo.image_small
                               ? { uri:this.props.currentUserInfo.image_small }
                               : images.avatar }/>
                </View>
                <TextInput
                    autogrow={true}
                    multiline={true}
                    onChangeText={(content) => this.setState({content})}
                    value={ this.state.content }/>
                <View style={styles.imagesWrap}>
                    {params && params.selectedPhoto && <Image style={styles.image} source={{uri: params.selectedPhoto.node.image.uri}}/>}
                </View>
            </ScrollView>
        )
    }
}

export default CreatePostScreen;
