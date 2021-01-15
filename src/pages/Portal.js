import React, { useState, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsConfig from '../utils/awsConfig';

Amplify.configure(awsConfig);

function Portal() {
  const emailInput = useRef();
  const passwordInput = useRef();

  const [errorMsg, setErrorMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [portalSelection, setPortalSelection] = useState("dashboard");

  function login(e) {
    e.preventDefault();
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    
    if (email.length > 0 && password.length > 0) {
      Auth.signIn({ username: email, password: password }).then(() => {
        setLoggedIn(true);
      }).catch((error) => {
        setErrorMsg(error.message);
      });
    } else {
      setErrorMsg("Login info is incomplete.");
    }
  }

  return (
    <section className="portal-login-container">
      {!loggedIn ? 
        <article className="login-container">
          <div className="login-panel">
            <h1>
              Toppings Vendor Portal
            </h1>

            <form onSubmit={login}>
              {errorMsg != "" ? <span className="error-message">{errorMsg}</span> : ""}
              <label for="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
              <label for="password">Password</label><input className="text-input" type="password" ref={passwordInput} />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </article>
      :
        <article className="portal-container">
          <nav>
            <ul className="nav-buttons">
              <li><span className={portalSelection == "dashboard" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("dashboard")}>Dashboard</span></li>
              <li><span className={portalSelection == "menu" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("menu")}>Your Menu</span></li>
              <li><span className={portalSelection == "promotions" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("promotions")}>Active Promotions</span></li>
              <li><span className={portalSelection == "settings" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("settings")}>Settings</span></li>
              <li><span className={portalSelection == "terms" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("terms")}>Terms of Service</span></li>
            </ul>
          </nav>

          <div className="content">
            STUFF
          </div>
        </article>
      }
    </section>
  );
}

export default Portal;
