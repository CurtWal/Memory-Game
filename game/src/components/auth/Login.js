import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; // react hook for using auth0

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
}
