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
      
        <Row>
          <Col sm="12" md={{ size: 6, offset: 5 }}>
          <h1> Contact </h1>
            <Form>
              <FormGroup>
               
                <Input onChange={this.inputHandler.bind(this)} type="name" name="name" id="name" placeholder="Name"/>
              </FormGroup>
              <FormGroup>
              
                <Input onChange={this.inputHandler.bind(this)} type="email" name="email" id="email" placeholder="Email"/>
              </FormGroup>
              <FormGroup>
           
                <Input onChange={this.inputHandler.bind(this)} type="text" name="subject" id="subject" placeholder="Subject"/>
              </FormGroup>
              <FormGroup>
      
                <Input onChange={this.inputHandler.bind(this)} type="textarea" name="message" id="text-area" placeholder="Message"/>
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