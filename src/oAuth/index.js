import Facebook from './Facebook';
import Google from './Google';

class OAuth {
    constructor () {
        this.facebook = new Facebook();
        this.google = new Google();
    }
    getAccessToken = (provider) => {
        switch (provider){
        case 'facebook':
            return this.facebook.getAccessToken();
        case 'google':
            return this.google.getAccessToken();
        default:
            return { accessToken: null }
        }
    }
}

export const oAuth = new OAuth();