import React from 'react';
import Video from './background-video.mp4'; 

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

