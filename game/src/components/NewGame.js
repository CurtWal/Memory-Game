import React, { Component } from "react";

export class NewGame extends Component {
  state = {
    visible: true,
  };

  handleClick = () => {
    this.setState({ visible: !this.state.visible }, () => {
      this.props.play();
    });
  };
  handleChange = (e) => {
    e.preventDefault();
    this.props.select(e.target.value);
  };
  render() {
    const { visible } = this.state;
    return (
      <div className="menu-item">
        <button
          className="btn btn-play"
          onClick={this.handleClick}
          style={{ visibility: visible ? "visible" : "hidden" }}
        >
          Play
        </button>
        <form style={{ visibility: visible ? "visible" : "hidden" }}>
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
      </div>
    );
  }
}

export default NewGame;
