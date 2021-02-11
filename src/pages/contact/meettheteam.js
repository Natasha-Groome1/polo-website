import React from 'react'
import { Grid, Image, Segment, Divider} from 'semantic-ui-react'

const GridTeam = () => (
  <Grid columns={4} divided>
    <Divider hidden />
      <Segment attached="top" className="meettheteam" size="massive"  textAlign="center" > Meet the Team</Segment >
    <Grid.Row>
      <Grid.Column>
        <Image src='https://www.jfpoloacademy.com/files/IMG_4446.jpeg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.jfpoloacademy.com/files/Claire_mugshot.PNG' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.jfpoloacademy.com/files/PHOTO-2020-12-23-14-32-36.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.jfpoloacademy.com/files/PHOTO-2020-12-22-18-34-43.jpg' />
      </Grid.Column>
    </Grid.Row>
 
    <Grid.Row>
      <Grid.Column>
          <Segment size="large">
        Level 2 HPA Coach
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment size="large">
        Academy Manager 
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment size="large">
        Head Groom 
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment size="large">
        Groom 
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridTeam

// How to I get the photos the same size