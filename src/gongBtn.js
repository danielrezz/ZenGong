import React from 'react';
import { Image } from 'semantic-ui-react';
import gong from './gong.png';
import gongSound from './gongsound.wav';
import { Howl } from 'howler';
import './index.css';

function Gong() {

    let playGong = () => {
        let sound = new Howl({
            src: [gongSound],
            volume: 0.3
          });
          sound.play();
      }
      
    return (
        <>
            <Image
                src= { gong }
                as='a'
                size='large' circular
                className='gong'
                href='#'
                onClick= { playGong }
            />
        </>
    )
}

export default Gong;