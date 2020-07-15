import { Clock } from "./clock";

export class Sound {
    private a1 = document.querySelector('#a1') as HTMLAudioElement;
    private a15 = document.querySelector('#a15') as HTMLAudioElement;
    private a60 = document.querySelector('#a60') as HTMLAudioElement;
    constructor(private clock: Clock) {
        this.clock.addListener(() => this.tick());
    }
    private audios: HTMLAudioElement[] = [this.a1, this.a15, this.a60];
    private tick() {
        this.audios.forEach(a => {
            a.pause();
        });
    }
    s1() {
        play(this.a1);
    }
    s15(){
        play(this.a15);
    }
    s60(){
        play(this.a60);
    }
}
function play(a: HTMLAudioElement) {
    a.currentTime = 0;
    a.play();
}