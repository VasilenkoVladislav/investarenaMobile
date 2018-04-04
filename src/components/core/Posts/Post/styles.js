import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width,
        padding: 10,
        marginTop: 10,
    },
    bar: {
        alignSelf: 'center',
        marginBottom: 10
    },
    postHeaderWrap: {
        paddingBottom: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfoWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatarUser: {
        marginRight: 5
    },
    userName: {
        color: '#3a79ee',
        maxWidth: width - 80
    },
    statusWrap: {
        flexDirection: 'row'
    },
    createdText: {
      fontSize: 10
    },
    status: {
        width: 4,
        height: 4,
        borderRadius: 2,
        alignSelf: 'center',
        marginRight: 3
    },
    postContent: {
        paddingVertical: 5
    },
    image: {
        paddingVertical: 5,
        width: width - 20,
        height: 350,
    },
    postFooterWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5
    },
    postFooterBlock: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postFooterText: {
        marginLeft: 5
    }
});
