import React, { Component } from 'react'

export default class PlayAgain extends Component {
  render() {
    return (
        <div className="menu-item">
        <button className="btn" onClick={() => this.props.again()}>Play again?</button>
    </div>
    )
  }
}
