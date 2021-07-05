import React from "react";
import ContactForm from "../../components/organisms/forms/form/contact.js";
import NavigationBar from "../../components/organisms/navigation/navigation.js";
import Images from "../../components/atoms/photos/imageslogo";
import ButtonSocial from "../../components/atoms/socialmedia/socialmedia";
import GridTeam from "../../components/molecules/team/meettheteam";
import { Divider } from "semantic-ui-react";

function contact() {
  return (
    <div className="Contact">
      <Images />
      <h1>{"J F Polo Academy"}</h1>
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

export default contact;
