import React from 'react';
import NavigationBar from '../navigation/navigation.js';
import Images from '../photos/images.js';
import Dropdown from '../chukkas/dropdowndivider';


function March() {
    return(
        <div className="March">
      <Images /> 
      <NavigationBar />
      <Dropdown />
      <Images /> 
    </div>
  );
}

export default March;