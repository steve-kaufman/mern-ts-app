import React, { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default class LoginForm extends Component {
  render () {
    return (
      <div className="loginForm">
        <Container>
          <Form>
            <Form.Group controlId="unameFormGroup">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>
            <Form.Group controlId="unameFormGroup">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>
            <Button variant="primary" type="submit">Log In</Button>
          </Form>
        </Container>
      </div>
    )
  }
}
