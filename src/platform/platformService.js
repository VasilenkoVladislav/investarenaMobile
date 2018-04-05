import Widgets from './widgets';
import Umarkets from './umarkets';

class PlatformService {
    constructor () {
        this._store = null;
        this._platform = null;
    }
    initialize (store) {
        this._store = store;
    }
    get platform () {
        return this._platform;
    }
    set platform (value) {
        this._platform && this._platform.closeWebSocketConnection();
        if (value === 'umarkets' || value === 'maximarkets') {
            this._platform = new Umarkets(this._store);
        } else {
            this._platform = new Widgets(this._store);
        }
    }
}

export const platformService = new PlatformService();
