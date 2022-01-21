import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import { setUnverifiedUser, getUnverifiedUser } from '../utils/session';
import CognitoClient from '../utils/CognitoClient';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as customMutations from '../graphql/customMutations';

import { getCurrentUser, setCurrentUser, getCurrentPage, setCurrentPage, clearSession, setTokens } from '../utils/session';

Amplify.configure(awsConfig);

function PortalSignUp(props) {
  const { Cognito } = props;

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
  const [userName, setUserName] = useState(false);

  useEffect(() => {
    props.toggleShowHeader(true);

    let user = getCurrentUser();
    let page = getCurrentPage();
    if (user != null && page != null) {
      console.log(user);
      emailInput.current.value = user.username;
      passwordInput.current.value = user.password;
      login(null);
      console.log("user", user);
    }
  }, []);

  async function signUp(e) {
    e.preventDefault();
    let name = nameInput.current.value;
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    let phoneNumber = phoneNumberInput.current.value.replaceAll(/-/g, "").replaceAll(/\s/g, "");

    if (phoneNumber.charAt(0) !== "+") {
        phoneNumber = "+" + (phoneNumber.length === 10 ? "1" : "") + phoneNumber;
    }
    
    let unverifiedUser;

    if (name.length > 0 && email.length > 0 && phoneNumber.length >= 10 && password.length > 0) {
      try {
        unverifiedUser = await Cognito.signUp(email, password, [
          {
            Name: 'name',
            Value: name,
          },
          {
            Name: 'phone_number',
            Value: phoneNumber,
          },
          {
            Name: 'custom:isUser',
            Value: '0',
          }
        ]);
      } catch (err) {
        setErrorMsg(err.message);
      }

      setUnverifiedUser(unverifiedUser);
      setSignedUp(true);
      setSuccessMsg("Account created, please enter the confirmation code.");
      setErrorMsg("");
      setUserName(name);
    } else {
      setErrorMsg("Account info is incomplete.");
    }
  }

  async function confirmSignUp(e) {
    e.preventDefault();
    let name = userName;
    let email = emailInput.current.value;
    let code = codeInput.current.value;

    let unverifiedUser = getUnverifiedUser();

    if (email.length > 0 && code.length > 0) {
      await Cognito.confirmRegistration(unverifiedUser.userSub, code);
      // await Auth.confirmSignUp(email, code)
        // setSignedUp(true);
      // }).catch((error) => {
      //   setErrorMsg(error.message);
      //   if (error.message.indexOf("Current status is CONFIRMED") > -1 /*|| error.message.indexOf("Invalid JSON") > -1*/) {
      //     setConfirmed(true);
      //     setErrorMsg("");
      //     setSuccessMsg("Account confirmed, please sign in.");

      //     const user = {
      //       name: name,
      //       email: email
      //     }
      //   }
      // });
      setConfirmed(true);
      setErrorMsg("");
      setSuccessMsg("Account confirmed, please sign in.");

      // const restaurant = {
      //   name: "Your Restaurant Name",
      //   email: email,
      //   address: "Your Address",
      //   city: "Your City",
      //   description: "Your Restaurant Description",
      //   lat: null,
      //   long: null,
      //   phone_number: null,
      //   state: "Your State",
      //   zip_code: "Your Zip Code"
      // };

      // API.graphql(graphqlOperation(customMutations.createRestaurant, restaurant))
      // .then(createRestaurantResp => {
      //   console.log('Create Restaurant', createRestaurantResp);
      //   setErrorMsg('');
      // })
      // .catch(err => {
      //   console.log(err);
      // });
    } else {
      setErrorMsg("Account info is incomplete.");
    }
  }

  async function login(e) {
    console.log('dalk');
    if (e != null) {
      console.log('wot');
      e.preventDefault();
    }

    console.log(awsConfig);

    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    
    console.log('HI');
    if (email.length > 0 && password.length > 0) {
      const user = { 
        username: email, 
        password: password,
      };
      console.log(user);

      const result = await Cognito.authenticateUser(email, password);
      // const result = await Auth.signIn(user); //.then(() => {
      console.log("auth sign in", result);
      setTokens(result);

      const currentUser = await Cognito.getCurrentUserAttributes();

        // const restaurant = {
        //   name: "Your Restaurant Name",
        //   userId: currentUser.attributes.sub,
        //   address: "Your Address",
        //   city: "Your City",
        //   description: "Your Restaurant Description",
        //   lat: 100.0,
        //   long: 100.0,
        //   phoneNumber: '+15105132142',
        //   state: "Your State",
        //   zip_code: "Your Zip Code",
        //   isOpen: "true",
        // };
        
        // await API.graphql(graphqlOperation(customMutations.createRestaurant, restaurant));

        const userWithSub = {
          ...user,
          cognitoId: currentUser[0].Value,
        };
        setCurrentUser(userWithSub);
      //   .then(createRestaurantResp => {
      //     console.log('Create Restaurant', createRestaurantResp);
      //     setErrorMsg('');
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      // }).catch((error) => {
      //   setErrorMsg(error.message);
      // });
            
      if (getCurrentPage() == null) {
        setCurrentPage("orders");
      }


      props.setUser(userWithSub);
      setLoggedIn(true);
    } else {
      setErrorMsg("Login info is incomplete.");
    }
  }

  return (
    <section className="portal-login-container">
      {loggedIn ? 
        <Redirect to={`/portal/${getCurrentPage()}`} />
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
                    <label htmlFor="name">Name</label><input className="text-input" type="text" ref={nameInput} />
                    <label htmlFor="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
                    <label htmlFor="phone">Phone Number</label><input className="text-input" type="tel" ref={phoneNumberInput} defaultValue="" />
                    <label htmlFor="password">Password</label><input className="text-input" type="password" ref={passwordInput} />
                    <input className="submit-button" type="submit" value="Submit" />
                  </form>
                : signedUp && !confirmed ?
                  <form onSubmit={confirmSignUp}>
                    {errorMsg == "" && successMsg != "" ? <span className="login-message success">{successMsg}</span> : ""}
                    {errorMsg != "" ? <span className="login-message">{errorMsg}</span> : ""}
                    <label htmlFor="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
                    <label htmlFor="code">Confirmation Code</label><input className="text-input" type="text" ref={codeInput} />
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
                  <label htmlFor="email">Email Address</label><input className="text-input" ref={emailInput} />
                  <label htmlFor="password">Password</label><input className="text-input" type="password" ref={passwordInput} />
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
