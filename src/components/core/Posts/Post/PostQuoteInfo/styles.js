import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    postTradingInfoWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currentTradingInfoWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quoteName: {
        color: '#444',
        marginHorizontal: 15,
    },
    recommendWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: '#1ebea5',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3
    },
    recommendTriangle: {
        width: 0,
        height: 0,
        margin: 0,
        left: -8,
        borderStyle: 'solid',
        borderLeftWidth: 12.5,
        borderRightWidth: 12.5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [{rotate: '90deg'}]
    },
    recommendText: {
        marginRight: 5,
        color: 'white'
    },
});
