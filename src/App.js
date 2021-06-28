import React, { useState } from "react";
import './App.css';
import Gong from './gongBtn.js';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './random_affirmation';
import {Howl} from 'howler';
import droneSound from './drone.mp3';
import { useSpring, animated } from 'react-spring';

function App() {

  const [data, setData] = useState('Hit the gong for a positive message');
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    config: { duration: 3000 },
    handleClick: () => set(!flip)});

  const handleClick = () => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.affirmation));
  }

  let sound = new Howl({
    src: [droneSound],
    loop: true,
    volume: 0.3,
  });

  sound.once('load', function(){
    sound.play();
  });

  return (
    <div className="App">
      <div className="bg-image" />
      <animated.p id="quote-text" style={props}>{data}</animated.p>
      <button
        onClick={handleClick}
        className="gongBtn"
      >
        <Gong />
      </button>
    </div>
  );
}

export default App;
