import React, { useState, useEffect } from "react";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_KEY,
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
          setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    });
  }, []);

  const handleSignIn = () => {
    auth.signIn().then(() => {
      setIsSignedIn(true);
    });
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      setIsSignedIn(false);
    });
  };

  const renderAuthButton = () => {
    if (isSignedIn === true) {
      return <button onClick={() => handleSignOut()}>Sign out</button>;
    } else if (isSignedIn === false) {
      return <button onClick={() => handleSignIn()}>Sign in</button>;
    } else {
      return <div>Loading...</div>;
    }
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
