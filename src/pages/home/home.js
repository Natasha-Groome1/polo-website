import React from "react";
import { Header } from "semantic-ui-react";
import NavigationBar from "../../components/organisms/navigation/navigation";
import Posts from "../../components/molecules/postage/postage";
import ContactForm from "../../components/organisms/forms/form/contact.js";
import Images from "../../components/atoms/photos/imageslogo";
import Video from "../../components/atoms/photos/video.js";
import WelcomeInfo from "/Users/natashagroome/dev/stomp-the-divots/src/components/templates/home/info";
import ButtonSocial from "../../components/atoms/socialmedia/socialmedia";
import { Divider } from "semantic-ui-react";

function home() {
  return (
    <div className="App">
      <Images />
      <h1>{"J F Polo Academy"}</h1>
      <NavigationBar />
      <Header className="Welcome" size="huge">
        Over 25 Years of Experience...
      </Header>
      <Video />
      <WelcomeInfo />
      <Posts />
      <ContactForm />
      <Divider hidden />
      <ButtonSocial /* list={[{title:"Facebook"}, {title:"Twitter"}, {title:"LinkedIn", link:"https://www.linkedin.com/in/natasha-groome-39bb68146/"}, {title:"Instagram"}, {title:"YouTube"}]} */
      />
      <Divider hidden />
      <Images />
    </div>
  );
}

export default home;
