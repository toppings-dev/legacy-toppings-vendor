import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import logo from './assets/images/logo-white.png';
import Portal from './pages/Portal';
import PortalSignUp from './pages/PortalSignUp';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Route exact path="/portal" component={Portal} />
        <Route exact path="/portal-sign-up" component={PortalSignUp} />
        
        <header className="primary">
          <nav>
            <span className="heading"><Link className="nav-link" to="/"><img src={logo} /></Link></span>

            <ul className="nav-buttons links">
              <li><Link className="nav-link" to="/">About Us</Link></li>
              <li><Link className="nav-link" to="/portal">Vendor Portal</Link></li>
            </ul>
          </nav>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
