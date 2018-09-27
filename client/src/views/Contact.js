import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import httpClient from '../httpClient';
import { Alert } from 'reactstrap';

class Contact extends Component {
  state = {
    fields: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    alert: '',
    visible: false,
    thanks: ''
  };

  inputHandler(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    });
  }

  onDismiss() {
    this.setState({
      visible: false
    });
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    if (
      !this.state.fields.name ||
      !this.state.fields.email ||
      !this.state.fields.subject ||
      !this.state.fields.message
    ) {
      this.setState({
        alert: 'All Fields Must Be Filled Out.',
        visible: true
      });
    } else {
      httpClient.sendEmail(this.state.fields).then(serverResponse => {
        this.setState({
          fields: {
            name: '',
            email: '',
            subject: '',
            message: ''
          },
          thanks: 'Thanks for reaching out! Will get back to you soon.'
        });
      });
    }
  }

  render() {
    return (
      <div className="Contact">
        <div className="offset" />

        <Row>
          <Col sm="6" md={{ size: 6 }}>
            <h5>Feel free to reach out and ask questions through the form!</h5>

            <div className="thank-you">{this.state.thanks}</div>
          </Col>
          <Col sm="6" md={{ size: 6 }}>
            <h1> Contact </h1>
            <Alert
              color="danger"
              isOpen={this.state.visible}
              toggle={this.onDismiss.bind(this)}
            >
              {this.state.alert}
            </Alert>
            <Form onSubmit={this.onSubmitHandler.bind(this)}>
              <FormGroup>
                <Input
                  onChange={this.inputHandler.bind(this)}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name*"
                  value={this.state.fields.name}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.inputHandler.bind(this)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                  value={this.state.fields.email}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.inputHandler.bind(this)}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject*"
                  value={this.state.fields.subject}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.inputHandler.bind(this)}
                  type="textarea"
                  name="message"
                  id="text-area"
                  placeholder="Message*"
                  value={this.state.fields.message}
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
        <div className="offset" />
      </div>
    );
  }
}

export default Contact;
