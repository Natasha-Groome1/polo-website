import React from 'react';
import { Segment, Header, Grid, Image,Button } from 'semantic-ui-react'
import { posts } from '../dummy-posts/dummy-posts';

function Posts() {
    return (
        <div className="posts">
            <Grid centered columns={3} doubling>
                 {posts.map(post =>
                    <Grid.Column key={post.title}>
                        <Segment>
                            <Image src={post.image} />
                            <Header as="h1">{post.title}</Header>
                            <p>{post.excerpt}</p>
                            <Button type="Learn more" href="/Home" font="black" background="white"> Learn more </Button> 
                        </Segment>
                    </Grid.Column>)}
            </Grid>
        </div>

    )
}
export default Posts;
