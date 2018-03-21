import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';

class CreatePostScreen extends Component {
    constructor (props) {
        super (props);
        this.state = { content: '' }
    }
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
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.imagesWrap}>
                    {this.props.navigation.state.params && this.props.navigation.state.params.selectedPhoto && <Image style={styles.image} source={{uri: selectedPhoto.node.image.uri}}/>}
                </View>
            </View>
        )
    }
}

export default CreatePostScreen;
