import React from 'react';
import NavigationBar from '../navigation/navigation.js';
import Images from '../photos/images.js';
import Dropdown from '../chukkas/dropdowndivider';


function June() {
    return(
        <div className="June">
      <Images /> 
      <NavigationBar />
      <Dropdown />
      <Images /> 
    </div>
  );
}

export default June;