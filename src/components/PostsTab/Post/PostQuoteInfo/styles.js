import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    blockWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quoteName: {
        fontSize: 12,
        color: '#444',
        marginHorizontal: 5,
    },
    recommendWrap: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        paddingLeft: 3,
        height: 18,
        backgroundColor: '#1ebea5',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3
    },
    recommendTriangle: {
        width: 0,
        right: -12,
        position: 'absolute',
        height: 0,
        margin: 0,
        borderStyle: 'solid',
        borderLeftWidth: 9,
        borderRightWidth: 9,
        borderBottomWidth: 6,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [{rotate: '90deg'}]
    },
    recommendText: {
        fontSize: 12,
        marginRight: 5,
        color: 'white'
    },
});
