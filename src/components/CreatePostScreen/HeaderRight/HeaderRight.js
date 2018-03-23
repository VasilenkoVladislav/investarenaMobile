import { Text,  TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const HeaderRight = ({state, replace}) => {
    const handleOnPress = () => {
        const clientPostId = Date.now().toString();
        const data = {
            post: {
                client_id: clientPostId,
                show_captcha: false,
                access: 'Public',
                market: 'Simple',
                content: state.params.content,
                image: null,
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
        state.params && state.params.contentValid
            ? <TouchableOpacity style={styles.customHeader}
                              onPress={handleOnPress}>
                <Text style={styles.customHeaderText}>Share</Text>
            </TouchableOpacity>
            : null
    )
};

export default HeaderRight;
