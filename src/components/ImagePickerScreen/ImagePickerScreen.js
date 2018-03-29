import { View, FlatList, TouchableHighlight, Image, CameraRoll, TouchableOpacity, PermissionsAndroid, InteractionManager } from 'react-native';
import React, { Component } from 'react';
import { CustomTextBold } from '../core/CustomText';
import { styles } from './styles';

class ImagePickerScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Gallery',
            headerTintColor: 'white',
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.header,
            headerRight: (navigation.state.params && navigation.state.params.selectedImage) &&
                <TouchableOpacity style={styles.customHeader}
                                  onPress={() => navigation.replace('CreatePost', { selectedImage: navigation.state.params.selectedImage })}>
                    <CustomTextBold style={styles.customHeaderText}>Done</CustomTextBold>
                </TouchableOpacity>
        }
    };
    constructor (props) {
        super(props);
        this.state = {
            images: [],
            index: null,
            has_next_page: true,
            end_cursor: null
        };
    }
    componentDidMount = async () => {
        try {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    'title': 'InvestArena App Camera Permission',
                    'message': 'InvestArena App needs access to your camera ' +
                    'so you can take awesome pictures.'
                }
            );
        } catch (err) {
            console.warn(err)
        }
    };
    setIndex = (index) => {
        if (index === this.state.index) {
            index = null
        }
        this.props.navigation.setParams({selectedImage: index && this.state.images[index]});
        this.setState({ index });
    };
    onEndReached = () => {
        InteractionManager.runAfterInteractions(async () => {
            const { end_cursor, has_next_page, images } = this.state;
            if (!has_next_page && images) {
                return;
            }
            const data = await CameraRoll.getPhotos({
                first: 10,
                assetType: 'Photos',
                after: end_cursor
            });
            this.setState({
                images: (images || []).concat(data.edges),
                end_cursor: data.page_info.end_cursor,
                has_next_page: data.page_info.has_next_page,
            });
        });
    };
    render () {
        return (
            <View style={styles.container}>
                <FlatList
                    extraData={this.state.index}
                    data={this.state.images}
                    numColumns={3}
                    keyExtractor={item => item.node.image.uri}
                    onEndReachedThreshold={0.5}
                    onEndReached={this.onEndReached}
                    renderItem={({ item, index }) => (
                         <TouchableHighlight style={{opacity: index === this.state.index ? 0.5 : 1}}
                                            underlayColor='transparent'
                                            onPress={() => this.setIndex(index)}>
                            <Image style={styles.image} source={{uri: item.node.image.uri}}/>
                        </TouchableHighlight>
                    )}>
                </FlatList>
            </View>
        )
    }
}

export default ImagePickerScreen;
