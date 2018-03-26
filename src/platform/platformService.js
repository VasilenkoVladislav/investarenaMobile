import Widgets from './widgets';

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
        if (value === 'umarkets' || 'maximarkets') {
            this._platform = new Widgets(this._store);
        } else {
            this._platform = new Widgets(this._store);
        }
    }
}

export const platformService = new PlatformService();
