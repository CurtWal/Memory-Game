import React, { Component } from "react";
import GameBoard from "./GameBoard";
import NewGame from "./NewGame";
import PlayAgain from "./PlayAgain";
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGame: false,
      won: false,
      cards: [],
      clicks: 0,
      amount: "",
      show: false
    };
  }

  countClicks = (e) => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  };
  // create a way to get random img for the amount of cards the user wants
  generateDeck = () => {
    let cards = [];
    for (let i = 1; i < this.state.amount + 1; i++) {
      let id = createId();
      let id2 = createId();
      let rand = Math.floor(Math.random() * 300) + 1;
      const card1 = {
        id: id,
        matchesId: id2,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
        flipped: false,
        found: false,
      };
      const card2 = {
        id: id2,
        matchesId: id,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
        flipped: false,
        found: false,
      };
      cards.push(card1);
      cards.push(card2);
    }
    this.shuffleCards(cards);
    this.setState({
      cards: cards,
    });
  };
  // pass the amount state to the child and in the child when the user changes the amount pass it 
  //  back up to the parent
  handleSelect = (select) => {
    this.setState({
      amount: select,
    });
  };

  // randomly shuffle cards
  shuffleCards = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  // make a way to reset the game without reloading page
  resetGame = (e) => {
    this.setState(
      {
        newGame: false,
        won: false,
        cards: [],
        clicks: 0,
      },
      () => {
        this.initGame();
      }
    );
  };
  // when the user wins set the won state to true
  hasWon = () => {
    this.setState({
      won: true,
      show: true
    });
  };
  // when the user clicks play start the page and shuffle the cards
  initGame = () => {
    this.generateDeck();
    this.setState({
      newGame: true,
    });
  };
  render() {
    const { cards, newGame, won, clicks } = this.state;
    return (
      <div>
        <div className="menu">
          <div className="message">{won && <h2>You win! Total card flips: {clicks}</h2>}</div>
          <NewGame select={this.handleSelect} play={this.initGame} />

          {won && (
            <PlayAgain again={this.resetGame} clicks={this.state.clicks} amount={this.state.amount} show={this.state.show}select={this.handleSelect} />
          )}
        </div>
        <div className="board-container">
          {newGame ? (
            <GameBoard
              cards={cards}
              won={this.hasWon}
              click={this.countClicks}
            />
          ) : null}
          {newGame && <p className="message center">Total flips: {clicks}</p>}
        </div>
      </div>
    );
  }
}
const createId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
