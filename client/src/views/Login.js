import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Login extends Component {
  render(){
    return(
      <Form>
        <FormGroup>
          <Label for="Login">Log In</Label>
          <Input type="text" name="email" id="login" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default Login