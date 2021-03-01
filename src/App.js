import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import logo from './assets/images/logo-white.png';
import Portal from './pages/Portal';
import PortalAuthentication from './pages/PortalAuthentication';

function App() {
  const [showHeader, toggleShowHeader] = useState(true);
  const [user, setUser] = useState({});

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Route exact path="/portal/:selection" render={() => <Portal toggleShowHeader={toggleShowHeader} user={user} setUser={setUser} />} />
        <Route exact path="/portal-auth/:selection" render={() => <PortalAuthentication toggleShowHeader={toggleShowHeader} user={user} setUser={setUser} />} />
        
        {showHeader ?
          <header className="primary">
            <nav>
              <span className="heading"><Link className="nav-link" to="/"><img src={logo} /></Link></span>

              <ul className="nav-buttons links">
                <li><Link className="nav-link" to="/">About Us</Link></li>
                <li><Link className="nav-link" to="/portal-auth/sign-in">Vendor Portal</Link></li>
              </ul>
            </nav>
          </header>
        : ""}
      </BrowserRouter>
    </div>
  );
}

export default App;
