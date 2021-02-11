import React from 'react';
import ContactForm from '../form/contact.js';
import NavigationBar from '../navigation/navigation.js';
import Images from '../photos/images.js';
import ButtonSocial from '../socialmedia/socialmedia';
import {Divider} from 'semantic-ui-react';

function Merchandise() {
    return(
        <div className="Merchandise">
      <Images /> 
      <NavigationBar />
      <ContactForm />
      <Divider hidden />
      <ButtonSocial />
      <Divider hidden />
      <Images /> 
    </div>
  );
}

export default Merchandise;