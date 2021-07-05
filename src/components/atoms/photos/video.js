import React from "react";
import Video from "/Users/natashagroome/dev/stomp-the-divots/src/components/atoms/resources/background-video2.mp4";

function header() {
  return (
    <video
      src={Video}
      alt="Background"
      className="Welcomevideo"
      width="100%"
      height="50%"
      loop={true}
      autoPlay
      muted
    />
  );
}

export default header;
