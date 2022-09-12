import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Main from "./Game";
export default function Game() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <div className="ShowBooks">
          <Logout />
          <Main/>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}