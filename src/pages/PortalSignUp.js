import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsConfig from '../utils/awsConfig';

Amplify.configure(awsConfig);

function PortalSignUp() {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const phoneNumberInput = useRef();
  const codeInput = useRef();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

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
        // if (error.message.indexOf("Current status is CONFIRMED") > -1) {
        //   setConfirmed(true);
        // }
      });
    } else {
      setErrorMsg("Account info is incomplete.");
    }
  }

  return (
    <section className="portal-login-container">
      {signedUp && confirmed ?
        <Redirect to="/portal?account-created" />
      :
        <article className="login-container">
          <div className="login-panel">
            <h1>
              Vendor Portal
            </h1>

            {!signedUp && !confirmed ? 
              <form onSubmit={signUp}>
                {errorMsg != "" ? <span className="login-message">{errorMsg}</span> : ""}
                <label for="name">Name</label><input className="text-input" type="text" ref={nameInput} />
                <label for="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
                <label for="phone">Phone Number</label><input className="text-input" type="tel" ref={phoneNumberInput} />
                <label for="password">Password</label><input className="text-input" type="password" ref={passwordInput} />
                <input className="submit-button" type="submit" value="Submit" />
              </form>
            :
            <form onSubmit={confirmSignUp}>
              {errorMsg == "" && successMsg != "" ? <span className="login-message success">{successMsg}</span> : ""}
              {errorMsg != "" ? <span className="login-message">{errorMsg}</span> : ""}
              <label for="email">Email Address</label><input className="text-input" type="email" ref={emailInput} />
              <label for="code">Confirmation Code</label><input className="text-input" type="text" ref={codeInput} />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
            }

            <span>Already have an account? <Link to="/portal">Sign In</Link></span>
          </div>
        </article>
      }
    </section>
  );
}

export default PortalSignUp;
