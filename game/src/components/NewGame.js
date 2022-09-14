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
            <option value="1">20 cards</option>
            <option value="6.4">12 cards</option>
            <option value="5.5">10 cards</option>
            <option value="4.5">8 cards</option>
            <option value="3.5">6 cards</option>
            <option value="2.5">4 cards</option>
          </select>
        </form>
      </div>
    );
  }
}

export default NewGame;
