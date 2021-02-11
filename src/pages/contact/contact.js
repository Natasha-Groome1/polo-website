import React from 'react';
import ContactForm from '../form/contact.js';
import NavigationBar from '../navigation/navigation.js';
import Images from '../photos/images.js';
import ButtonSocial from '../socialmedia/socialmedia';
import GridTeam from '../contact/meettheteam';
import {Divider} from 'semantic-ui-react';

function Contact() {
    return(
        <div className="Contact">
      <Images /> 
      <NavigationBar />
      <GridTeam />
      <ContactForm />
      <Divider hidden />
      <ButtonSocial />
      <Divider hidden />
      <Images /> 
    </div>
  );
}

export default Contact;