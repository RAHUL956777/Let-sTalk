import React from "react";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const ClientId = `471900735433-t0813lfb9mqhbogmej8jdaq9onsk7s1b.apps.googleusercontent.com`;
  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
