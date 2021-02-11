import React from 'react';
import NavigationBar from '../navigation/navigation.js';
import Images from '../photos/images.js';
import Dropdown from '../chukkas/dropdowndivider';
import ChukkaForm from '../chukkas/chukkaform';
import ButtonSocial from '../socialmedia/socialmedia';
import {Divider} from 'semantic-ui-react';

function Chukkas() {
    return(
        <div className="Chukkas">
      <Images /> 
      <NavigationBar />
      <Dropdown />
      <ChukkaForm />
      <Divider hidden />
      <ButtonSocial />
      <Divider hidden />
      <Images /> 
    </div>
  );
}

export default Chukkas;