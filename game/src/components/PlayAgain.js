import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import axios from "axios";
export default class PlayAgain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show,
    };
  }
  postScore = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:3002/new-score";
    let newScore = {
      name: e.target.name.value,
      score: this.props.clicks,
      cards: this.props.amount,
    };
    try {
      await axios.post(URL, newScore);
      this.closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (e) => {
    e.preventDefault();
    this.props.select(e.target.value);
  };
  closeModal = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div className="menu-item">
        <button className="btn" onClick={() => this.props.again()}>
          Play again?
        </button>
        <form>
          <select onChange={this.handleChange}>
            <option value="none">none</option>
            <option value="10.0">10 pairs</option>
            <option value="6.0">6 pairs</option>
            <option value="5.0">5 pairs</option>
            <option value="4.0">4 pairs</option>
            <option value="3.0">3 pairs</option>
            <option value="2.0">2 pairs</option>
          </select>
        </form>
        <Modal
          show={this.state.show}
          onHide={this.closeModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Post Your Score</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.postScore}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Button type="submit">POST SCORE</Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
