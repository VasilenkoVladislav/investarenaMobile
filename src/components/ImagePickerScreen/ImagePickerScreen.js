import { View, ScrollView, Text, TouchableHighlight, Image, CameraRoll, TouchableOpacity, PermissionsAndroid } from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';

class ImagePickerScreen extends Component {
    static navigationOptions = {
        title: 'Gallery',
        headerTintColor: 'white',
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.header,
        headerRight: <TouchableOpacity style={styles.customHeader}>
            <Text style={styles.customHeaderText}>Done</Text>
        </TouchableOpacity>
    };
    constructor (props) {
        super(props);
        this.state = { photos: [], indices: [] };
    }
    componentDidMount = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    'title': 'Cool Photo App Camera Permission',
                    'message': 'Cool Photo App needs access to your camera ' +
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
        let newArr = [];
        if (this.state.indices.includes(index)) {
            newArr = this.state.indices.filter((i) => i!== index);
        } else {
            newArr = [index, ...this.state.indices];
        }
        // this.props.navigation.setParams({test: ''});
        this.setState({ indices: newArr });
    };
    getPhotos = async () => {
        const r = await CameraRoll.getPhotos({
            first: 10000,
            assetType: 'Photos'
        });
        this.setState({ photos: r.edges });
    };
    render () {
        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollView}>
                    {
                        this.state.photos.map((p, i) => {
                            return (
                                <TouchableHighlight style={{opacity: this.state.indices.includes(i) ? 0.5 : 1}}
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
