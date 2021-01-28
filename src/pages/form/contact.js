import React from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'

function ContactForm() {
    return (
        <div className="form">
            <Segment>
                <Header as="h2">Contact Us</Header>
            </Segment>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label> Email Address</label>
                    <input placeholder= 'Email Address' />
                </Form.Field>
                <Form.TextArea label='Enquiry'
                placeholder='Tell us more...' />
                <Button type='submit' color="black">Submit</Button>
            </Form>
        </div>
    )
}
export default ContactForm;
