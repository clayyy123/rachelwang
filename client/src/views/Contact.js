import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import httpClient from "../httpClient";

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

  clearForm() {
    this.input.value = ""
  }

  onSubmitHandler (evt){
    evt.preventDefault()
    httpClient.sendEmail(this.state.fields).then(serverResponse => {
      this.setState({
        fields:{
          name:"",
          email:"",
          subject:"",
          message:"",
          }
      })
    })
  }

  render(){
    return(
      <div className="Contact">
      <div className="offset">
      </div>
      
        <Row>
          <Col sm="12" md={{ size: 6, offset: 5 }}>
          <h1> Contact </h1>
            <Form onSubmit={this.onSubmitHandler.bind(this)}>
              <FormGroup>
               
                <Input onChange={this.inputHandler.bind(this)} type="name" name="name" id="name" placeholder="Name" value={this.state.fields.name}/>
              </FormGroup>
              <FormGroup>
              
                <Input onChange={this.inputHandler.bind(this)} type="email" name="email" id="email" placeholder="Email" value={this.state.fields.email}/>
              </FormGroup>
              <FormGroup>
           
                <Input onChange={this.inputHandler.bind(this)} type="text" name="subject" id="subject" placeholder="Subject" value={this.state.fields.subject}/>
              </FormGroup>
              <FormGroup>
      
                <Input onChange={this.inputHandler.bind(this)} type="textarea" name="message" id="text-area" placeholder="Message" value={this.state.fields.message}/>
              </FormGroup>
              <Button>Submit</Button>
          </ Form>
        </Col>
      </Row>
      <div className="offset">
      </div>
      </div>
    )
  }
}

export default Contact