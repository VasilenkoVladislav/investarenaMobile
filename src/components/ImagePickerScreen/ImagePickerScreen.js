import { View, ScrollView, Text, TouchableHighlight, Image, CameraRoll, TouchableOpacity, PermissionsAndroid } from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';

class ImagePickerScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Gallery',
            headerTintColor: 'white',
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.header,
            headerRight: (navigation.state.params && navigation.state.params.selectedPhoto) &&
                <TouchableOpacity style={styles.customHeader}
                                  onPress={() => navigation.replace('CreatePost', { selectedPhoto: navigation.state.params.selectedPhoto })}>
                    <Text style={styles.customHeaderText}>Done</Text>
                </TouchableOpacity>
        }
    };
    constructor (props) {
        super(props);
        this.state = { photos: [], index: null };
    }
    componentDidMount = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    'title': 'InvestArena App Camera Permission',
                    'message': 'InvestArena App needs access to your camera ' +
                    'so you can take awesome pictures.'
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                await this.getPhotos();
            }
        } catch (err) {
            console.warn(err)
        }
    };
    setIndex = (index) => {
        if (index === this.state.index) {
            index = null
        } else {
            this.props.navigation.setParams({selectedPhoto: this.state.photos[index]});
        }
        this.setState({ index });
    };
    getPhotos = async () => {
        const r = await CameraRoll.getPhotos({ first: 30000, assetType: 'Photos' });
        this.setState({ photos: r.edges });
    };
    render () {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {
                        this.state.photos.map((p, i) => {
                            return (
                                <TouchableHighlight style={{opacity: i === this.state.index ? 0.5 : 1}}
                                                    key={i}
                                                    underlayColor='transparent'
                                                    onPress={() => this.setIndex(i)}>
                                    <Image style={styles.image} source={{uri: p.node.image.uri}}/>
                                </TouchableHighlight>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

export default ImagePickerScreen;
