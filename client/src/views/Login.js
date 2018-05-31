import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import httpClient from "../httpClient.js"


class Login extends Component {
  state = {
		fields: { email: "", password: ""}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.logsuccess(user)
				this.props.history.push('/')
			}
		})
	}
  render(){
    return(
      <div className="Log">
        <div className="offset">
        </div>
        <Form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
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
      </div>
    )
  }
}

export default Login