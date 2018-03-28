import { Dimensions, StyleSheet} from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    headerTitle: {
        marginHorizontal: 0,
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
    },
    header: {
        backgroundColor: '#16254c'
    },
    container: {
        backgroundColor: '#fff',
        paddingVertical: 15
    },
    currentUserInfoWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    currentUserAvatar: {
        marginRight: 15,
    },
    inputWrap: {
        fontFamily: 'OpenSans-Regular',
        textAlignVertical: 'top',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    imagesWrap: {
        marginBottom: 15
    },
    image: {
        width,
        marginBottom: 15,
        height: 350,
    },
});
