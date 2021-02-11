import React from 'react';
import {Header} from 'semantic-ui-react';
import NavigationBar from '../navigation/navigation';
import Posts from '../post/post';
import ContactForm from '../form/contact.js';
import Images from '../photos/images.js';
import Video from '../photos/video.js';
import WelcomeInfo from './info';
import ButtonSocial from '../socialmedia/socialmedia';
import {Divider} from 'semantic-ui-react';


function Home() {
  return (
    <div className="App">
      <Images /> 
      <NavigationBar />
      <Header className="Welcome" size="huge">Over 25 Years of Experience...</Header>
      <Video /> 
      <WelcomeInfo />
      <Posts /> 
      <ContactForm />
      <Divider hidden />
      <ButtonSocial />
      <Divider hidden />
      <Images /> 
    </div>
  );
}

export default Home;

// Implement Social media buttons here