import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ebee'
    },
    createPostContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 15,
        padding: 10,
    },
    creatPostImage: {
        width: 30,
        height: 30,
        borderRadius: 20
    },
    createPostTextWrap: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 200,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e2e2e5',
    }
});
