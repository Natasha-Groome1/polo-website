import React from 'react';
import NavigationBar from '../navigation/navigation';
import Posts from '../post/post';
import ContactForm from '../form/contact.js';
import Images from '../photos/images.js';
import Video from '../photos/video.js';



function Home() {
  return (
    <div className="App">
      <Images /> 
      <NavigationBar />
      <Video /> 
      <Posts /> 
      <ContactForm />
      <Images /> 
    </div>
  );
}

export default Home;
