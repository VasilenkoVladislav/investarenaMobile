import { Dimensions, StyleSheet} from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    headerTitle: {
        marginHorizontal: 0,
        fontSize: 16,
        fontFamily: 'OpensSans-Regular'
    },
    header: {
        backgroundColor: '#16254c'
    },
    customHeader: {
        marginRight: 15,
    },
    customHeaderText: {
        color: 'white',
        fontSize: 16,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: (width / 3) - 3,
        height: (width / 3),
        marginBottom: 3
    }
});
