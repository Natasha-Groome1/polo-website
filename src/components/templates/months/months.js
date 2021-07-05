import React from "react";
import NavigationBar from "../../organisms/navigation/navigation.js";
import Images from "../../atoms/photos/imageslogo.js";
import Dropdown from "../../molecules/dropdowndivider/dropdowndivider";
import allContent from "./content";
import { Container, Card, Divider } from "semantic-ui-react";

const months = ({ match }) => {
  const month = match.params[`nameofmonth`];

  const getContentForMonth = (month) => {
    return allContent[month];
  };

  const content = getContentForMonth(month);
  const title = content.Title;
  const url = content.VideoURL;
  const paragraph = content.Paragraph;
  const image = content.Image;

  return (
    <div className="months">
      <Images />
      <h1>{"J F Polo Academy"}</h1>
      <NavigationBar />
      <h1>{title}</h1>
      <img
        className="image-container"
        width="370"
        height="290"
        type="image/png"
        src={image}
        alt="Monthly Photos"
      ></img>
      <Dropdown />{" "}
      <video className="video-container" width="750" height="400" controls>
        <source type="video/mp4" src={url} />
      </video>
      <Divider hidden />
      <Card centered className="feedback">
        <Container centered>
          <p>{paragraph}</p>
        </Container>
      </Card>
      <Divider hidden />
      <Images />
    </div>
  );
};

export default months;
