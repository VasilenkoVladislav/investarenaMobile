import { LoginManager, AccessToken } from 'react-native-fbsdk';

export default class Facebook {
    getAccessToken = async () => {
        try {
            let FBAccessToken = await AccessToken.getCurrentAccessToken();
            if (!FBAccessToken) {
                const result = await LoginManager.logInWithReadPermissions(['email, public_profile']);
                if (result && !result.isCancelled) {
                    FBAccessToken = await AccessToken.getCurrentAccessToken();
                }
            }
            return { accessToken: FBAccessToken && FBAccessToken.accessToken };
        }
        catch (e) {
            console.log(e);
            return { accessToken: null };
        }
    }
}
