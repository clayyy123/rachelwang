import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Contact extends Component {
  
  state = {
    fields:{
    name:"",
    email:"",
    subject:"",
    message:"",
    }
  }

  inputHandler(evt){
    this.setState({
      fields:{
      ...this.state.fields,
      [evt.target.name]: evt.target.value
      }
    })
  }

  render(){
    return(
      <div className="Contact">
      <div className="offset">
      </div>
        <h1> Contact </h1>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input onChange={this.inputHandler.bind(this)} type="name" name="name" id="name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this.inputHandler.bind(this)} type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input onChange={this.inputHandler.bind(this)} type="text" name="subject" id="subject" />
              </FormGroup>
              <FormGroup>
                <Label for="text">Message</Label>
                <Input onChange={this.inputHandler.bind(this)} type="textarea" name="message" id="text-area" />
              </FormGroup>
              <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
      <div className="offset">
      </div>
      </div>
    )
  }
}

export default Contact