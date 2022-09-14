import React, { Component } from "react";
import {Form, Modal, Button} from 'react-bootstrap';
export default class PlayAgain extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show: this.props.show
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.props.select(e.target.value);
  };
closeModal = () => {
  this.setState({
    show:false
  })
}
  render() {
    return (
      <div className="menu-item">
        <button className="btn" onClick={() => this.props.again()}>
          Play again?
        </button>
        <form>
          <select onChange={this.handleChange}>
            <option value="1">20 cards</option>
            <option value="6.4">12 cards</option>
            <option value="5.5">10 cards</option>
            <option value="4.5">8 cards</option>
            <option value="3.5">6 cards</option>
            <option value="2.5">4 cards</option>
          </select>
        </form>
        <Modal show={this.state.show}
        onHide={this.closeModal}
        backdrop="static"
        keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Post Your Score</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={this.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
        
      </div>
    );
  }
}
