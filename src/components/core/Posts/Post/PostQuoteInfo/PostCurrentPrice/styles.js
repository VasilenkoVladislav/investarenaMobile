import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginRight: 5,
        alignItems: 'center'
    },
    triangle: {
        width: 0,
        height: 0,
        margin: 0,
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 6,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    triangleUp: {
        marginTop: 6
    },
    triangleDown: {
        marginBottom: 6
    }
});
