import { GoogleSignin } from 'react-native-google-signin';

export default class Google {
    getAccessToken = async () => {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                webClientId: '458481598101-96tr56qjegir86pdcu2lfk3q7sb2pl4m.apps.googleusercontent.com',
                offlineAccess: false
            });
            const user = await GoogleSignin.signIn();
            return { accessToken: user && user.accessToken };
        }
        catch (e) {
            console.log(e);
            return { accessToken: null };
        }
    }
}