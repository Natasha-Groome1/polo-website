import React from 'react';
import logo from './jflogo.png'; 

console.log(logo); 

function Header() {
  return <img
  src={logo} alt="Logo" 
  width= "90" 
  height="120"/>
}

export default Header;