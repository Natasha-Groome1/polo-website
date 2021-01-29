import React from 'react';
import Video from '/Users/natashagroome/dev/stomp-the-divots/src/pages/resources/background-video2.mp4';

console.log(Video); 

function Header() {
  return <video 
  src={Video} alt="Background" 
  width="1000" 
  height="500" 
  loop= "true"
  autoPlay muted />;
  
  
}

export default Header;