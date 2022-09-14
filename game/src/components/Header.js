import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&copy; Curtrick Walton</Navbar.Brand>
      </Navbar>
      </div>
    )
  }
}
