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
      <Button color="danger" onClick={this.toggle.bind(this)}>launch</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
        <ModalBody>
          <img className="gallery" src={this.props.image}/>
        </ModalBody>
      </Modal>
      </div>
    )
  }
}

export default Pop