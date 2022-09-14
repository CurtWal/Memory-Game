import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Game from "./Game";
import { useState, useEffect } from "react";
import axios from "axios";
import {Navbar, NavItem} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function Display() {
  const { isAuthenticated } = useAuth0();
  const [img, setImg] = useState([]);
  const [newImg, setNewImg] = useState([]);
  const [score, setScore] = useState([]);
  const getRand = async () => {
    const API = "http://localhost:3002/get-pokemon";
    const res = await axios.get(API);
    setImg(res.data);
  };
  const getPokeball = async () => {
    const API = "http://localhost:3002/get-pokeball";
    const res = await axios.get(API);
    setNewImg(res.data);
  }
  const getScore = async() => {
    const API = `localhost:3002/score`;
    let res = await axios.get(API);
    setScore(res.data);
  }
  const addNewScore = (newScore) => {
    setScore([...score, newScore]);
  }
  useEffect(() => {
    getRand();
    getPokeball();
    getScore();
  });
  return (
    <>
      {isAuthenticated ? (
        <div>
          <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#e71989'}} variant="dark">
        <Navbar.Brand>Pokemon Memory</Navbar.Brand>
        <NavItem>
        <Link to='/score' className='nav-link' >Scores</Link>
        </NavItem>
        <NavItem>
        <Logout/>
        </NavItem>
      </Navbar>
          
          <h1 style={{ color: "white", textAlign: "center" }}>
            <img src={img} alt="shiny pokemon" /> P<img src={newImg} alt=''style={{width: '45px'}}/>kemon Mem<img src={newImg} alt=''style={{width: '45px'}}/>ry Game{" "}
            <img src={img} alt="shiny pokemon" />
          </h1>
          <Game />
        </div>
      ) : (
        <div>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#e71989'}} variant="dark">
        <Navbar.Brand> <Login /> </Navbar.Brand>
      </Navbar>
        <h1 style={{ color: "white" }}>Please login to play game</h1>
        </div>
      )}
    </>
  );
}
