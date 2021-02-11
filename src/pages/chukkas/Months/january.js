import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import Images from '/Users/natashagroome/dev/stomp-the-divots/src/pages/photos/images'
import ButtonSocial from '/Users/natashagroome/dev/stomp-the-divots/src/pages/socialmedia/socialmedia'

function January() {
    return(
        <div className="January">
      <Images /> 
      <Dropdown />
      <ButtonSocial />
     <Images /> 
    </div>
  );
    }

export default January;

