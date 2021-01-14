import React, { useState, useRef } from 'react';

function Portal() {
  const emailInput = useRef();
  const passwordInput = useRef();

  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function login(e) {
    e.preventDefault();
    console.log(error, emailInput.current.value, passwordInput.current.value);
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    if (password == "password") {
      setLoggedIn(true);
    }
  }

  return (
    <div className="portal-login-container">
      {!loggedIn ? 
        <div className="login-container">
          <div className="login-panel">
            <h1>
              Toppings Vendor Portal
            </h1>

            <form onSubmit={login}>
              {error ? <span className="error-message">Incorrect username or password.</span> : ""}
              <label for="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
              <label for="password">Password</label><input className="text-input" type="password" ref={passwordInput} />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      :
        <div className="portal-container">
          
        </div>
      }
    </div>
  );
}

export default Portal;
