import React from 'react';
import NavigationBar from '../navigation/navigation.js';
import Images from '../photos/images.js';
import Dropdown from '../chukkas/dropdowndivider';

const Months = ( { match } ) => {

  const month = match.params[`nameofmonth`]

    return(
      <div>
        <Images /> 
        <h1>{"J F Polo Academy"}</h1>
        <NavigationBar />
        <h1>{month}</h1>
        <Dropdown />
        <Images /> 
      </div>
  );
}

export default Months;