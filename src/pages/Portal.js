import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { getCurrentUser, setupSession, clearSession } from '../utils/session';
import logo from '../assets/images/logo-white.png';
import dashboardIcon from '../assets/images/portal-dashboard-icon.svg';
import termsServiceIcon from '../assets/images/portal-terms-service-icon.svg';
import menuIcon from '../assets/images/portal-menu-icon.svg';
import promotionsIcon from '../assets/images/portal-promotions-icon.svg';
import settingsIcon from '../assets/images/portal-settings-icon.svg';
import logoutIcon from '../assets/images/portal-logout-icon.svg';

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
        setPortalSelection("dashboard");
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
    const menu = {
      name: "Papaya",
      menuId: "1"
    };

    API.graphql({ query: queries.listMenuCategorys/*, variables: { input: menu }*/ }).then(({ data: { listMenuCategorys } }) => {
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
            <img className="portal-toppings-logo" src={logo} />

            <ul className="nav-buttons">
              <li><span className={portalSelection == "dashboard" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("dashboard")}><img src={dashboardIcon} /> Dashboard</span></li>
              <li><span className={portalSelection == "terms" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("terms")}><img src={termsServiceIcon} /> Terms of Service</span></li>
              <li><span className={portalSelection == "menu" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("menu")}><img src={menuIcon} /> Your Menu</span></li>
              <li><span className={portalSelection == "promotions" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("promotions")}><img src={promotionsIcon} /> Your Active Promotions</span></li>
              <li><span className={portalSelection == "settings" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("settings")}><img src={settingsIcon} /> Account Settings</span></li>
              <li><span className="portal-nav-option" onClick={logout}><img src={logoutIcon} /> Log Out</span></li>
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
