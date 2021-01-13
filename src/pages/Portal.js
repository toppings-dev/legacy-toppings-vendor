import React, { useState } from 'react';

function Portal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function login() {
    setError(prevError => !prevError);
    console.log(error);
  }

  return (
    <div className="portal-container">
      <div className="login-container">
        <h1>
          Toppings Vendor Portal
        </h1>

        <form>
          {error ? <span className="error-message">Incorrect username or password.</span> : ""}
          <label for="email">Email Address</label><input className="text-input" type="email" onChange={(e) => setEmail(e.target.value)} />
          <label for="password">Password</label><input className="text-input" type="password" onChange={(e) => setPassword(e.target.value)} />
          <input className="submit-button" type="submit" value="Submit" onClick={login} />
        </form>
      </div>
    </div>
  );
}

export default Portal;
