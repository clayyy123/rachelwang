import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import httpClient from '../httpClient';

class SignUp extends React.Component {
  state = {
    fields: { email: '', password: '' }
  };

  onInputChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    httpClient.signUp(this.state.fields).then(user => {
      this.setState({ fields: { email: '', password: '' } });
      if (user) {
        this.props.history.push('/');
      }
    });
  }
  render() {
    return (
      <div className="Log">
        <div className="offset" />
        <Form
          onChange={this.onInputChange.bind(this)}
          onSubmit={this.onFormSubmit.bind(this)}
        >
          <FormGroup>
            <Label for="Login">Sign Up</Label>
            <Input type="text" name="email" id="login" placeholder="email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
