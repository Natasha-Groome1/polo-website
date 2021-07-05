import React from "react";
import NavigationBar from "../../components/organisms/navigation/navigation.js";
import Images from "../../components/atoms/photos/imageslogo";
import Dropdown from "../../components/molecules/dropdowndivider/dropdowndivider";
import ChukkaForm from "../../components/organisms/forms/chukkaform";
import ButtonSocial from "../../components/atoms/socialmedia/socialmedia";
import { Divider } from "semantic-ui-react";
import Image from "../../components/atoms/photos/imagechukka";

function chukkas() {
  return (
    <div className="Chukkas">
      <Images />
      <h1>{"J F Polo Academy"}</h1>
      <NavigationBar />
      <Dropdown />
      <Image />
      <Divider hidden />
      <Images />
      <ChukkaForm />
      <Divider hidden />
      <ButtonSocial />
      <Divider hidden />
      <Images />
    </div>
  );
}

export default chukkas;
