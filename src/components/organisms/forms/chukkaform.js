import React from "react";
import { Button, Form, Segment, Header } from "semantic-ui-react";

function chukkaForm() {
  return (
    <div className="form">
      <Segment>
        <Header as="h2" textAlign="center">
          Fill out form
        </Header>
      </Segment>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label> Email Address</label>
          <input placeholder="Email Address" />
        </Form.Field>
        <Form.TextArea
          label="Level"
          placeholder="Tell us what level you play at..."
        />
      </Form>
      <Segment basic textAlign={"center"}>
        <Button
          className="submit"
          type="submit"
          color="black"
          style={{ textAlign: "center" }}
        >
          Submit
        </Button>
      </Segment>
    </div>
  );
}
export default chukkaForm;
