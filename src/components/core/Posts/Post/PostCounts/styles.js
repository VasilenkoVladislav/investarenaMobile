import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        borderTopWidth: 0.5,
        borderTopColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    likesCountWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrap: {
        marginRight: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#2c3552'
    },
    text: {
        fontSize: 12
    }
});
