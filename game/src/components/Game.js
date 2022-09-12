import React, { Component } from "react";
import GameBoard from "./GameBoard";
import NewGame from "./NewGame";
import PlayAgain from './PlayAgain';

export default class Game extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       newGame: false,
       won: false,
       cards: [],
       clicks: 0
    }
  }

  countClicks = () => {
    this.setState((prevState) => ({
        clicks : prevState.clicks + 1
    }));
  }

  generateDeck = () => {
    let amount = 10;
    let cards = [];
    for (let i = 1; i < amount + 1; i++) {
      let id = createId();
      let id2 = createId();
      let rand = Math.floor(Math.random() * 300) + 1;
      const card1 = {
        id: id,
        matchesId: id2,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
        flipped: false,
        found: false,
      }
      const card2 = {
        id: id2,
        matchesId: id,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
        flipped: false,
        found: false,
      }
      cards.push(card1);
      cards.push(card2);
    }
    this.shuffleCards(cards);
    this.setState({
      cards: cards
    });
  }

  shuffleCards = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  resetGame = () => {
    this.setState({
      newGame: false,
      won: false,
      cards: [],
      clicks: 0
    }, () => {
      this.initGame()
    });
  }

  hasWon = () => {
    this.setState({
      won: true
    });
  };

  initGame = () => {
    this.generateDeck();
    this.setState({
      newGame: true
    });
  };
  render() {
    const { cards, newGame, won, clicks } = this.state;
    return (
      <div>
        <div className="board-container">
          {newGame ?
            (<GameBoard cards={cards} won={this.hasWon} click={this.countClicks} />)
            : null}
            {newGame && (<p className="message center">Total flips: {clicks}</p>)}
        </div>

        <div className="menu">
        <div className="message">
            {won && (<h2>You win!</h2>)}
          </div>
          <NewGame play={this.initGame} />
          {won && (<PlayAgain again={this.resetGame} />)}
        </div>
      </div>
    )
  }
}
const createId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}