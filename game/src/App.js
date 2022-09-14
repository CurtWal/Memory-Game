import React, { Component } from "react";
import Display from "./components/Display";
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <div>
        <Display/>
        <Footer/>
      </div>
    )
  }
}
