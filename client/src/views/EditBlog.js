import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import httpClient from "../httpClient.js"

class Edit extends Component{

  state = {
		fields: {_id:"", title:"",body: "", imageURL: "", isActive:false}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

  componentDidMount(){
    console.log(this.props.blog)
    this.setState({
      fields:{_id:this.props.blog._id, title:this.props.blog.title, body:this.props.blog.body,imageURL:this.props.blog.imageURL }
    })
  }

  handleSubmit(evt){
    evt.preventDefault()
   
    httpClient.editPost(this.state.fields).then((serverResponse)=>{
      if(serverResponse){
        this.props.history.push('/blogs')
      }
    })
  }
  

  

   render(){
    return(
      <div className ="Post">
      {this.props.currentUser && this.state.fields.title &&
      (
        <div>
          <h1> Edit </h1>
        <Form onChange={this.onInputChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} >
          <FormGroup>
            <Label for="post">Title</Label>
            <Input type="text" name="title" id="title" value={this.state.fields.title} />
          </FormGroup>
          <FormGroup>
            <Label for="body">Body</Label>
            <Input type="textarea" name="body" id="body" value={this.state.fields.body} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Image URL</Label>
            <Input type="text" name="imageURL" id="image" value={this.state.fields.imageURL} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </div>
      )
    }
        
      </div>
    )
  }
}

export default Edit