import React, {Component} from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Pop extends Component{
  state = {
    modal: false
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    return(
      <div className="Pop">
      <div className="overlay" onClick={this.toggle.bind(this)}></div>
      <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
        
          <img className="popUp" src={this.props.image}/>
        
      </Modal>
      </div>
    )
  }
}

export default Pop