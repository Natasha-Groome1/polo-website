import React from "react";
import { Segment, Header, Grid, Image, Button } from "semantic-ui-react";
import { posts } from "../dummy-posts/dummy-posts";

function postage() {
  return (
    <div className="posts">
      <Grid centered columns={3} doubling>
        {posts.map((post) => (
          <Grid.Column key={post.title}>
            <Segment>
              <Image src={post.image} centered />
              <Header as="h1" textAlign="center">
                {post.title}
              </Header>
              <p>{post.excerpt}</p>
              <Segment basic textAlign={"center"}>
                <Button
                  type="Learn more"
                  href={post.url}
                  color="black"
                  style={{ textAlign: "center" }}
                >
                  {" "}
                  Learn more{" "}
                </Button>
              </Segment>
            </Segment>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}
export default postage;
