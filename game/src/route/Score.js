import React, { useState, useEffect } from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom"; // basically our <a href='#'>
import Footer from "../components/Footer";
import axios from "axios";
import { Card, Button, Modal } from "react-bootstrap";
export default function Score() {
  const [score, setScore] = useState([]);
  const [show, setShow] = useState(false);
  const getScore = async () => {
    const API = `${process.env.REACT_APP_API}score`;
    let res = await axios.get(API);
    setScore(res.data);
  };
  const resetButton = () => setShow(true);
  const closeModal = () => setShow(false);

  const resetScore = async () => {
    closeModal();
    const URL = `${process.env.REACT_APP_API}delete-score`;
    let res = await axios.delete(URL);
    setScore(res.data);
  };
  useEffect(() => {
    getScore();
  });
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#e71989" }}
        variant="dark"
      >
        <Navbar.Brand>Can Of Books</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            Game
          </Link>
        </NavItem>
      </Navbar>
      <Outlet />

      <h1 style={{ color: "white", textAlign: "center" }}>Player Scores</h1>
      <Button
        style={{ backgroundColor: "#e71989" }}
        onClick={() => resetButton()}
      >
        Reset Score
      </Button>

      <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>ARE YOU SURE YOU WANT TO REST SCORES</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              style={{ backgroundColor: "red" }}
              onClick={() => resetScore()}
            >
              {" "}
              Yes
            </Button>
            <Button
              style={{ backgroundColor: "steelblue" }}
              onClick={closeModal}
            >
              {" "}
              NO
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {score.length === 0 ? (
        <div>
          <h3 style={{ color: "white", textAlign: "center" }}>No Scores</h3>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          {score.map((scores) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <p>{scores.name}</p>
                </Card.Title>
                <Card.Text>
                  <p>Score: {scores.score} clicks</p>
                  <p>Card Amount: {scores.cards}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

// export default class Score extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        score: []
//     }
//   }
//   componentDidMount() {
//     this.getScore();
//   }
//   getScore = async() => {
//         const API = `http://localhost:3002/score`;
//         let res = await axios.get(API);
//         this.setState({
//           score: res.data
//         })}
//   render() {
//     return (
//       <div>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand>Can Of Books</Navbar.Brand>
//         <NavItem>
//           <Link to="/" className="nav-link">
//             Game
//           </Link>
//         </NavItem>
//         {/* PLACEHOLDER: render a navigation link to the about page */}
//       </Navbar>
//       <Outlet />
//       {this.state.score !== 0 ?(<div style={{display: "flex",textAlign: 'center',color: 'white'}}>
//       {this.state.score.map((scores)=> (
//             <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title><p>{scores.name}</p></Card.Title>
//         <Card.Text>
//          <p>Score: {scores.score}</p>
//          <p>Card Amount: {scores.cards}</p>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//       ))}</div>):(<div><p style={{color: 'white'}}>No Scores</p></div>)}

//       <Footer />
//     </div>
//     )
//   }
// }
