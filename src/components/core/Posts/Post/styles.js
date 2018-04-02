import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width,
        padding: 10,
        marginTop: 10,
    },
    postHeaderWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userInfoWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userName: {
        color: '#3a79ee'
    },
    statusWrap: {
        flexDirection: 'row'
    },
    status: {
        width: 4,
        height: 4,
        borderRadius: 2,
        alignSelf: 'center',
        marginRight: 3
    },
    postContent: {
        marginTop: 10
    },
    image: {
        marginTop: 10,
        width: width - 20,
        height: 350,
    },
    postFooterWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    postFooterBlock: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
