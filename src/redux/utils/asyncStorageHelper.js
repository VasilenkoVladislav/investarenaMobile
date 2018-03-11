import { AsyncStorage } from 'react-native';

export async function getItemAsyncStorage (name, isParseJson = false) {
    const value = await AsyncStorage.getItem(name);
    if (isParseJson && value) {
        try {
            return { result: JSON.parse(value) };
        } catch (e) {
            return { error: e.message }
        }
    } else {
        return { result: value };
    }
}
