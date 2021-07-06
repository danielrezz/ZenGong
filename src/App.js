import React, { useState } from "react";
import './App.css';
import Gong from './gongBtn.js';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './random_affirmation';
import {Howl} from 'howler';
import droneSound from './drone.mp3';
import { useSpring, animated } from 'react-spring';
import treePic from './trees.png';
import waterPic from './water.png';
import cloudPic from './clouds.png';

function App() {

  const [data, setData] = useState('Hit the gong to find some zen');
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

  let imageArray = [treePic, waterPic, cloudPic];

  return (
    <div className="App" >
      <div
          className="bg-image"
          style={{background: `url(` + imageArray[Math.floor(Math.random() * imageArray.length)] + `)`}} 
          >
      <h1>Zen Gong</h1>
      {/* <div className="bg-image"/> */}
      <animated.p id="quote-text" style={props}>{data}</animated.p>
      <button
        onClick={handleClick}
        className="gongBtn"
      >
        <Gong />
      </button>
      </div>
    </div>
  );
}

export default App;
