import React from 'react';
import { CustomTextBold } from '../../core/CustomText';
import { TouchableOpacity } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import { styles } from './styles';

const HeaderRight = ({state, replace}) => {
    const handleOnPress = async () => {
        let image = null;
        const clientPostId = Date.now().toString();
        if (state.params && state.params.image) {
            image = await RNFetchBlob.fs.readFile(state.params.image, 'base64');
            image = 'data:image/jpeg;base64,' + image
        }
        const data = {
            post: {
                client_id: clientPostId,
                show_captcha: false,
                access: 'Public',
                market: 'Simple',
                content: state.params.content,
                image: image,
                files: null,
                group_id: null,
                company_id: null,
                meta: {
                    meta_title: null,
                    meta_description: null,
                    meta_image: null,
                    meta_link: null,
                    meta_video: null
                },
                collaborators: []
            }
        };
        state.params && state.params.createPost(clientPostId, data);
        replace('Main');
    };
    return (
        state.params && (state.params.contentValid || state.params.selectedImage)
            ? <TouchableOpacity style={styles.customHeader}
                              onPress={handleOnPress}>
                <CustomTextBold style={styles.customHeaderText}>Share</CustomTextBold>
            </TouchableOpacity>
            : null
    )
};

export default HeaderRight;
