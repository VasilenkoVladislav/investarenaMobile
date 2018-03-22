import { Dimensions, StyleSheet} from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    headerTitle: {
        marginHorizontal: 0,
        fontWeight: 'normal',
        fontSize: 16,
    },
    header: {
        backgroundColor: '#16254c'
    },
    container: {
        backgroundColor: '#fff'
    },
    currentUserInfoWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    currentUserAvatar: {
        width: 40,
        height: 40,
        marginRight: 15,
        borderRadius: 20
    },
    currentUserName: {
        fontWeight: 'bold',
        color: 'black'
    },
    inputWrap: {
      paddingHorizontal: 15
    },
    imagesWrap: {

    },
    image: {
        width,
        height: 400,
    },
});
