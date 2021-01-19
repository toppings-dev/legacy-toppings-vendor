import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { getCurrentUser, setupSession, clearSession } from '../utils/session';

Amplify.configure(awsConfig);

function Portal(props) {
  const emailInput = useRef();
  const passwordInput = useRef();
  const settingsNameInput = useRef();
  const settingsEmailInput = useRef();
  const settingsPhoneInput = useRef();
  const settingsBusinessNameInput = useRef();
  const settingsAddressInput = useRef();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(window.location.href.indexOf("?account-created") > -1 ? "Account created, please sign in." : "");
  const [loggedIn, setLoggedIn] = useState(false);
  const [portalSelection, setPortalSelection] = useState("dashboard");

  useEffect(() => {
    let user = getCurrentUser();
    if (user != null) {
      emailInput.current.value = user.username;
      passwordInput.current.value = user.password;
      login(null);
    }
  }, []);

  function login(e) {
    if (e != null) {
      e.preventDefault();
    }

    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    
    if (email.length > 0 && password.length > 0) {
      Auth.signIn({ username: email, password: password }).then(() => {
        setLoggedIn(true);
        setupSession({ username: email, password: password });
        props.toggleShowHeader(false);
        getData();
      }).catch((error) => {
        setErrorMsg(error.message);
      });
    } else {
      setErrorMsg("Login info is incomplete.");
    }
  }

  function logout() {
    Auth.signOut().then(() => {
      setLoggedIn(false);
      clearSession("user");
      props.toggleShowHeader(true);
    }).catch((error) => {
      console.log("Error signing out", error);
    });
  }

  function getData() {
  API.graphql({ query: queries.listMenuCategorys/*, variables: { id: "78b35763-384b-4adb-9139-1a6f57819514" }*/ }).then(({ data: { listMenuCategorys } }) => {
      console.log(listMenuCategorys);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <section className="portal-login-container">
      {!loggedIn ? 
        <article className="login-container">
          <div className="login-panel">
            <h1>
              Vendor Portal
            </h1>

            <form onSubmit={login}>
              {errorMsg == "" && successMsg != "" ? <span className="login-message success">{successMsg}</span> : ""}
              {errorMsg != "" ? <span className="login-message">{errorMsg}</span> : ""}
              <label for="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
              <label for="password">Password</label><input className="text-input" type="password" ref={passwordInput} />
              <input className="submit-button" type="submit" value="Submit" />
            </form>

            <span>Don't have an account? <Link to="/portal-sign-up">Sign Up</Link></span>
          </div>
        </article>
      :
        <article className="portal-container">
          <nav>
            <ul className="nav-buttons">
              <li><span className={portalSelection == "dashboard" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("dashboard")}>Dashboard</span></li>
              <li><span className={portalSelection == "terms" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("terms")}>Terms of Service</span></li>
              <li><span className={portalSelection == "menu" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("menu")}>Your Menu</span></li>
              <li><span className={portalSelection == "promotions" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("promotions")}>Your Active Promotions</span></li>
              <li><span className={portalSelection == "settings" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("settings")}>Account Settings</span></li>
              <li><span className="portal-nav-option" onClick={logout}>Log Out</span></li>
            </ul>
          </nav>

          <div className="content">
            {portalSelection == "dashboard" ? 
              <div className="portal-dashboard-container">Dashboard</div>
            : portalSelection == "terms" ? 
              <div className="portal-terms-container">Terms</div>
            : portalSelection == "menu" ? 
              <div className="portal-menu-container">
                <h3>Your Menu Items</h3>

                <button>Add Item</button>
              </div>
            : portalSelection == "promotions" ? 
              <div className="portal-promotions-container">
                <h3>Your Active Promotions</h3>

                <button>Add Promotion</button>
              </div>
            : portalSelection == "settings" ? 
              <div className="portal-settings-container">
                <h3>Account Settings</h3>

                <label for="name">Name</label><input className="text-input" type="text" ref={settingsNameInput} />
                <label for="email">Email Address</label><input className="text-input" type="email" ref={settingsEmailInput} />
                <label for="phone">Phone Number</label><input className="text-input" type="tel" ref={settingsPhoneInput} />
                <label for="business-name">Business Name</label><input className="text-input" type="text" ref={settingsBusinessNameInput} />
                <label for="address">Business Address</label><input className="text-input" type="text" ref={settingsAddressInput} />
                <button>Edit</button>
              </div>
            : ""}
          </div>
        </article>
      }
    </section>
  );
}

export default Portal;
