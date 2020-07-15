import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  const [time, setTime] = useState(0);
  const [going, setGoing] = useState(false);
  const [delta, setDelta] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  useEffect(() => {
    const listener = (time: number) => {
      const t = time - delta;
      if (!going) return;
      setTime(t);
      for (let setting of settings) {
        if (t % setting.time === 0) {
          setting.cb();
          break;
        }
      }
      if (t >= maxTime && maxTime !== 0) stop_();
    }
    clock.addListener(listener);
    return () => clock.removeListener(listener);
  }, [setTime, going, delta, maxTime]);

  const input = useRef<HTMLInputElement>(null);
  const start = useCallback(start_, [setGoing, setDelta, input]);
  const stop = useCallback(stop_, [setGoing, setTime]);
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
        {going  
          ? <input type="number" value={maxTime - time} />
          : <input type="number" ref={input} defaultValue="0"/>
        }
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
  function start_() {
    setGoing(true);
    setDelta(clock.currentTime);
    if (input.current) {
      setMaxTime(Number(input.current.value));
    }
  }
  function stop_() {
    setGoing(false);
    setTime(0);
  }
}
function twoDigits(t: number): string {
  if (t < 10) {
    return '0' + t;
  } else {
    return '' + t;
  }
}

export default App;
