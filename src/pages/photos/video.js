import React from 'react';
import Video from '/Users/natashagroome/dev/stomp-the-divots/src/pages/resources/background-video2.mp4';

console.log(Video); 

function Header() {
  return <video 
  src={Video} alt="Background" 
  className="Welcomevideo"
  width="100%"
  height="50%"
  loop= "true"
  autoPlay muted />
}

export default Header