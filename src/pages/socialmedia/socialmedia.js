import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ButtonSocial = () => (
  <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='linkedin' href='https://www.linkedin.com/in/natasha-groome-39bb68146/'>
      <Icon name='linkedin'  /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
    </Button>
  </div>
)

export default ButtonSocial
