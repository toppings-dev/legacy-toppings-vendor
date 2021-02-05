import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

import { getCurrentUser, setupSession, clearSession } from '../utils/session';

Amplify.configure(awsConfig);

function PortalSignUp(props) {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const phoneNumberInput = useRef();
  const codeInput = useRef();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    props.toggleShowHeader(true);

    let user = getCurrentUser();
    if (user != null) {
      emailInput.current.value = user.username;
      passwordInput.current.value = user.password;
      login(null);
    }
  }, []);

  function signUp(e) {
    e.preventDefault();
    let name = nameInput.current.value;
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    let phoneNumber = phoneNumberInput.current.value.replaceAll(/-/g, "").replaceAll(/\s/g, "");

    if (phoneNumber.charAt(0) != "+") {
        phoneNumber = "+" + (phoneNumber.length == 10 ? "1" : "") + phoneNumber;
    }
    
    if (name.length > 0 && email.length > 0 && phoneNumber.length >= 10 && password.length > 0) {
      Auth.signUp({ 
        username: email, 
        password: password,
        attributes: {
          name: name,
          email: email,
          phone_number: phoneNumber
        }
      }).then(() => {
        setSignedUp(true);
        setSuccessMsg("Account created, please enter the confirmation code.");
      }).catch((error) => {
        setErrorMsg(error.message);
      });
    } else {
      setErrorMsg("Account info is incomplete.");
    }
  }

  function confirmSignUp(e) {
    e.preventDefault();
    let email = emailInput.current.value;
    let code = codeInput.current.value;

    if (email.length > 0 && code.length > 0) {
      Auth.confirmSignUp(email, code).then(() => {
        setSignedUp(true);
      }).catch((error) => {
        setErrorMsg(error.message);
        if (error.message.indexOf("Current status is CONFIRMED") > -1) {
          setConfirmed(true);
          setErrorMsg("");
          setSuccessMsg("Account confirmed, please sign in.");

          // const restaurant = {
          //   id: "2",
          //   name: "The Krusty Krab",
          //   email: "eugene.krabs@krustykrab.com",
          //   name: "Mr. Krabs",
          //   address: "831 Bottom Feeder Lane",
          //   city: "Bikini Bottom",
          //   description: null,
          //   lat: null,
          //   long: null,
          //   phone_number: "430-390-4092",
          //   state: "Pacific Ocean",
          //   zip_code: "12403",
          // };

          const restaurant = {
            name: "Your Restaurant Name",
            email: email,
            address: "Your Address",
            city: "Your City",
            description: null,
            lat: null,
            long: null,
            phone_number: null,
            state: "Your State",
            zip_code: "Your Zip Code"
          };

          API.graphql({ query: mutations.createRestauraunt , variables: { input: restaurant } }).then(({ data: { createRestauraunt } }) => {
            console.log("Create Restaurant", createRestauraunt);
          }).catch((error) => {
            console.log(error);
          });

          const user = {
            name: name,
            email: email
          }

          API.graphql({ query: mutations.createUser , variables: { input: user } }).then(({ data: { createUser } }) => {
            console.log("Create User", createUser);
          }).catch((error) => {
            console.log(error);
          });
        }
      });
    } else {
      setErrorMsg("Account info is incomplete.");
    }
  }

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
      }).catch((error) => {
        setErrorMsg(error.message);
      });
    } else {
      setErrorMsg("Login info is incomplete.");
    }
  }

  return (
    <section className="portal-login-container">
      {loggedIn ? 
        <Redirect to="/portal/dashboard" />
        :
        <article className="login-container">
          <div className="login-panel">
            <h1>
              Vendor Portal
            </h1>

            <Switch>
              <Route path="/portal-auth/sign-up">
                {!signedUp && !confirmed ? 
                  <form onSubmit={signUp}>
                    {errorMsg != "" ? <span className="login-message">{errorMsg}</span> : ""}
                    <label for="name">Name</label><input className="text-input" type="text" ref={nameInput} />
                    <label for="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
                    <label for="phone">Phone Number</label><input className="text-input" type="tel" ref={phoneNumberInput} defaultValue="" />
                    <label for="password">Password</label><input className="text-input" type="password" ref={passwordInput} />
                    <input className="submit-button" type="submit" value="Submit" />
                  </form>
                : signedUp && !confirmed ?
                  <form onSubmit={confirmSignUp}>
                    {errorMsg == "" && successMsg != "" ? <span className="login-message success">{successMsg}</span> : ""}
                    {errorMsg != "" ? <span className="login-message">{errorMsg}</span> : ""}
                    <label for="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
                    <label for="code">Confirmation Code</label><input className="text-input" type="text" ref={codeInput} />
                    <input className="submit-button" type="submit" value="Submit" />
                  </form>
                : 
                  <Redirect to="/portal-auth/sign-in" />
                }

                <span>Already have an account? <Link to="/portal-auth/sign-in">Sign In</Link></span>
              </Route>
              <Route path="/portal-auth/sign-in">
                <form onSubmit={login}>
                  {errorMsg == "" && successMsg != "" ? <span className="login-message success">{successMsg}</span> : ""}
                  {errorMsg != "" ? <span className="login-message">{errorMsg}</span> : ""}
                  <label for="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
                  <label for="password">Password</label><input className="text-input" type="password" ref={passwordInput} />
                  <input className="submit-button" type="submit" value="Submit" />
                </form>

                <span>Don't have an account? <Link to="/portal-auth/sign-up">Sign Up</Link></span>
              </Route>
            </Switch>
          </div>
        </article>
      }
    </section>
  );
}

export default PortalSignUp;
