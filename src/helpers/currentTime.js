import moment from 'moment';
import EventObserver from './observer';

class CurrentTime {

    constructor () {
        this.observer = new EventObserver();
        this.currentTime = null;
    }

    startCountdown () {
        this.stopCountDown();
        this.currentTime = moment().valueOf();
        this.timer = setInterval(() => {
            this.currentTime += 1000;
            this.observer.broadcast(this.currentTime);
        }, 1000);
    }

    getTime () {
        return this.currentTime;
    }

    stopCountDown () {
        if (this.timer) {
            this.currentTime = null;
            clearInterval(this.timer);
        }
    }

    subscribeTick (fn) {
        this.observer.subscribe(fn)
    }

    unsubscribeTick (fn) {
        this.observer.unsubscribe(fn);
    }

}

export const currentTime = new CurrentTime();
