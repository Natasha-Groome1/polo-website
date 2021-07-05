import React from "react";
import ContactForm from "../../components/organisms/forms/form/contact.js";
import NavigationBar from "../../components/organisms/navigation/navigation.js";
import Images from "../../components/atoms/photos/imageslogo";
import ButtonSocial from "../../components/atoms/socialmedia/socialmedia";
import { Divider } from "semantic-ui-react";

function merchandise() {
  return (
    <div className="Merchandise">
      <Images />
      <h1>{"J F Polo Academy"}</h1>
      <NavigationBar />
      <ContactForm />
      <Divider hidden />
      <ButtonSocial />
      <Divider hidden />
      <Images />
    </div>
  );
}

export default merchandise;
