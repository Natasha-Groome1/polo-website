import React from 'react';
import ContactForm from '../form/contact.js';
import NavigationBar from '../navigation/navigation.js';
import Images from '../photos/images.js';

function Contact() {
    return(
        <div className="Contact">
      <Images /> 
      <NavigationBar />
      <ContactForm />
      <Images /> 
    </div>
  );
}

export default Contact;