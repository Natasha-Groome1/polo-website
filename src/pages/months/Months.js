import React from 'react';
import NavigationBar from '../navigation/navigation.js';
import Images from '../photos/images.js';
import Dropdown from '../chukkas/dropdowndivider';

const Months = ( { match } ) => {

  const month = match.params[`nameofmonth`]

    return(
      <div>
        <Images /> 
        <NavigationBar />
        <h1>{month}</h1>
        <Dropdown />
        <Images /> 
      </div>
  );
}

export default Months;