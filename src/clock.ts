export type Subscriber = (seconds: number) => void;

export class Clock {
    currentTime: number = 0;
    private intervalId = 0;
    private prevTime = 0;
    private subscribers: Set<Subscriber> = new Set();
    constructor(private delta = 1000) {

    }
    addListener(s: Subscriber) {
        this.subscribers.add(s);
    }
    removeListener(s: Subscriber) {
        this.subscribers.delete(s);
    }
    start() {
       this.prevTime = performance.now();
       this.intervalId = window.setInterval(() => this.tick(), this.delta / 10); 
    }
    stop() {
        this.currentTime = 0;
        window.clearInterval(this.intervalId);
        this.intervalId = 0;
    }
    nextTick(cb: Subscriber) {
        this.subscribers.add((t) => {
            cb(t);
            this.subscribers.delete(cb);
        })
    }
    private tick() {
        const currTime = performance.now();
        const delta = currTime - this.prevTime;
        if (delta > this.delta) {
            this.currentTime += Math.floor(delta / this.delta);
            this.subscribers.forEach(s => s(this.currentTime));
            this.prevTime = currTime;
        }
    }
}
export const clock = new Clock;