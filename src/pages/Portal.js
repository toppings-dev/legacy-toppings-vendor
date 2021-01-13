import React, { useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

function Portal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function login(e) {
    e.preventDefault();
    console.log(error, email, password);
  }

  return (
    <div className="portal-container">
      <div className="login-container">
        <h1>
          Toppings Vendor Portal
        </h1>

        <form onSubmit={login}>
          {error ? <span className="error-message">Incorrect username or password.</span> : ""}
          <label for="email">Email Address</label><input className="text-input" type="email" onChange={(e) => setEmail(e.target.value)} />
          <label for="password">Password</label><input className="text-input" type="password" onChange={(e) => setPassword(e.target.value)} />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Portal;
