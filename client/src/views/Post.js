import React, {Component} from "react"
import httpClient from "../httpClient.js"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Post extends Component{
  state = {
		fields: { title:"",body: "", imageURL: ""}
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
		httpClient.postBlog(this.state.fields).then(serverResponse => {
			this.setState({ fields: { title: "", body: "", imageURL: ""} })
			if(serverResponse) {
				this.props.history.push("/blogs")
			}
		})
	}
  render(){
    return(
      <div className ="Post">
      {this.props.currentUser
      ? (
        <Form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
          <FormGroup>
            <Label for="post">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Blog Title" />
          </FormGroup>
          <FormGroup>
            <Label for="body">Body</Label>
            <Input type="textarea" name="body" id="textAreaBody" placeholder="Blog Body" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Image URL</Label>
            <Input type="text" name="imageURL" id="image" placeholder="image URL" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      )
      :(
        <h1>Not Logged In </h1>
      )
    }
        
      </div>
    )
  }
}

export default Post