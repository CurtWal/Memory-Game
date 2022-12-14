import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

export class MemoryCard extends Component {
  flipCard = (e) => {
    if (this.props.found || this.props.flipped) return;
    this.props.flip(e.target.id);
  };

  render() {
    const { id, imgUrl, flipped, found } = this.props;
    return (
      <div className="card">
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <div
            id={id}
            className="memoryCard front"
            onClick={this.flipCard}
            style={cardBack}
            key="front"
          />
          <div
            className="memoryCard"
            onClick={this.flipCard}
            key="back"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "150px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: found ? "green" : "",
              cursor: found ? "" : "pointer",
            }}
          ></div>
        </ReactCardFlip>
      </div>
    );
  }
}

const cardBack = {
  background: "#e71989",
};

export default MemoryCard;
