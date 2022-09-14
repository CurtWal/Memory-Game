import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom"; // basically our <a href='#'>
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Profile () {
    const [score, setScore] = useState([]);
     const getScore = async() => {
        const API = `localhost:3002/score`;
        let res = await axios.get(API);
        setScore(res.data);
      }
      useEffect(() => {
        getScore();
      });
    /* TODO: render information about the developers */
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Can Of Books</Navbar.Brand>
          <NavItem>
            <Link to="/" className="nav-link">
              Game
            </Link>
          </NavItem>
          {/* PLACEHOLDER: render a navigation link to the about page */}
        </Navbar>
        <Outlet />
        {score.map((scores)=> (
            <>
          <p style={{ color: "white" }}>{score.name}</p> 
          <p>{scores.score}</p> 
          <p>{scores.cards}</p>
           </>
        ))}
        
        <Footer />
      </div>
    );
  }