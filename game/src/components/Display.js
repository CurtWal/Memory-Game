import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Game from "./Game";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Display() {
  const { isAuthenticated } = useAuth0();
  const [img, setImg] = useState([]);
  const getRand = async () => {
    const API = "http://localhost:3002/get-pokemon"
    const res = await axios.get(API);
    setImg(res.data);
  }
  useEffect(() => {
    getRand();
  })
  return (
    <>
      {isAuthenticated ? (
        <div >
          <Logout />
        <h1 style={{color: 'white', textAlign: 'center'}}>Pokemon Memory Game <img src={img} alt='shiny pokemon'/></h1>
          <Game/>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}