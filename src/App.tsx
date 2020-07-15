import React, { useEffect, useState } from 'react';
import './App.css';
import {clock} from './clock';
import {Sound} from './sound';
clock.start();
const sound = new Sound(clock);

const settings = [
  {time: 60, cb: () => sound.s60()},
  {time: 15, cb: () => sound.s15()},
  {time: 1, cb: () => sound.s1()}
]
function App() {
  const [time, setTime] = useState(0.1);
  const [going, setGoing] = useState(false);
  const [delta, setDelta] = useState(0);
  const listener = (time: number) => {
    console.log(time);
    const t = time - delta;
    if (!going) return;
    setTime(t);
    settings.reduce((played, setting) => {
      if (played) return true;
      if (t % setting.time === 0) {
        setting.cb();
        return true;
      } else {
        return false;
      }
    }, false);
  }
  useEffect(() => {
    clock.addListener(listener);
    return () => clock.removeListener(listener);
  }, [setTime, going, delta]);
  const secs = time % 60;
  const mins = (time - secs) / 60;
  const ss = twoDigits(secs);
  const mm = twoDigits(mins);
  return (
    <div>
      <div className="timer-face">
        <h1>{mm}:{ss}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => {setGoing(true); setDelta(clock.currentTime)}}>Start</button>
        <button onClick={() => {setGoing(false); setTime(0)}}>Stop</button>
      </div>
    </div>
  );
}
function twoDigits(t: number): string {
  if (t < 10) {
    return '0' + t;
  } else {
    return '' + t;
  }
}

/**
 * playing screen for 5 mins with ticks 1, 15, 60 secs
 * settings screen 
 */

export default App;
