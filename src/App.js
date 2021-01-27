import './App.css';

import React, { useState } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import logo from './assets/images/logo-white.png';
import Portal from './pages/Portal';
import PortalAuthentication from './pages/PortalAuthentication';

function App() {
  const [showHeader, toggleShowHeader] = useState(true);

  return (
    <div className="wrapper">
      <HashRouter basename = "/">
        <Route exact path="/portal/:selection" render={() => <Portal toggleShowHeader={toggleShowHeader} />} />
        <Route exact path="/portal-auth/:selection" render={() => <PortalAuthentication toggleShowHeader={toggleShowHeader} />} />
        
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
      </HashRouter>
    </div>
  );
}

export default App;
