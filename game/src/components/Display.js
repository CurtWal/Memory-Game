import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Game from "./Game";
export default function Display() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <div >
          <Logout />
          <Game/>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}