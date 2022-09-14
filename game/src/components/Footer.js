import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#e71989'}} variant="dark">
        <Navbar.Brand>&copy; Curtrick Walton</Navbar.Brand>
      </Navbar>
      </div>
    )
  }
}
