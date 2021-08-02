import './styles/App.css';
import './styles/Portal.css';
import './styles/PortalAuthentication.css';
import './styles/PortalOrders.css';
import './styles/PortalTermsService.css';
import './styles/PortalMenu.css';
import './styles/PortalRewards.css';
import './styles/PortalSettings.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import { getCurrentUser, setupSession, clearSession, getCurrentPage } from './utils/session';

import logo from './assets/images/logo-white.png';
import Portal from './pages/Portal';
import PortalAuthentication from './pages/PortalAuthentication';

function App() {
  const [showHeader, toggleShowHeader] = useState(true);
  const [user, setUser] = useState({});

  return (
    <div className="wrapper">
      <Route exact path="/portal/:selection" render={() => <Portal toggleShowHeader={toggleShowHeader} user={user} setUser={setUser} />} />
      <Route exact path="/portal-auth/:selection" render={() => <PortalAuthentication toggleShowHeader={toggleShowHeader} user={user} setUser={setUser} />} />
      
      <Redirect to={`/portal-auth/sign-in`} />
      {showHeader ?
        <header className="primary">
          <nav>
            <span className="heading"><Link className="nav-link" to="/portal-auth/sign-in"><img src={logo} /></Link></span>

            <ul className="nav-buttons links">
              {/*<li><Link className="nav-link" to="/">About Us</Link></li>*/}
              {/*<li><Link className="nav-link" to="/portal-auth/sign-in">Vendor Portal</Link></li>*/}
            </ul>
          </nav>
        </header>
      : ""}
    </div>
  );
}

export default App;
