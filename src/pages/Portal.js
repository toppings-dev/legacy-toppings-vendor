import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { getCurrentUser, setupSession, clearSession } from '../utils/session';
import PortalDashboard from './PortalDashboard';
import PortalTermsService from './PortalTermsService';
import PortalMenu from './PortalMenu';
import PortalPromotions from './PortalPromotions';
import PortalSettings from './PortalSettings';

import logo from '../assets/images/logo-white.png';
import dashboardIcon from '../assets/images/portal-dashboard-icon.svg';
import termsServiceIcon from '../assets/images/portal-terms-service-icon.svg';
import menuIcon from '../assets/images/portal-menu-icon.svg';
import promotionsIcon from '../assets/images/portal-promotions-icon.svg';
import settingsIcon from '../assets/images/portal-settings-icon.svg';
import logoutIcon from '../assets/images/portal-logout-icon.svg';

Amplify.configure(awsConfig);

function Portal(props) {
  const [portalSelection, setPortalSelection] = useState(window.location.href.slice(window.location.href.indexOf("/portal/") + "/portal/".length));
  const [loggedIn, setLoggedIn] = useState(getCurrentUser() != null);

  useEffect(() => {
    props.toggleShowHeader(false);
  }, []);

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

  function logout() {
    Auth.signOut().then(() => {
      setLoggedIn(false);
      clearSession("user");
      props.toggleShowHeader(true);
    }).catch((error) => {
      console.log("Error signing out", error);
    });
  }

  return (
    <section className="portal-login-container">
      {loggedIn ?
        <article className="portal-container">
          <nav>
            <Link to="/"><img className="portal-toppings-logo" src={logo} /></Link>

            <ul className="nav-buttons">
              <li><Link to="/portal/dashboard"><span className={portalSelection == "dashboard" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("dashboard")}><img src={dashboardIcon} /> Dashboard</span></Link></li>
              <li><Link to="/portal/terms-of-service"><span className={portalSelection == "terms-of-service" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("terms-of-service")}><img src={termsServiceIcon} /> Terms of Service</span></Link></li>
              <li><Link to="/portal/menu"><span className={portalSelection == "menu" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("menu")}><img src={menuIcon} /> Your Menu</span></Link></li>
              <li><Link to="/portal/promotions"><span className={portalSelection == "promotions" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("promotions")}><img src={promotionsIcon} /> Your Active Rewards</span></Link></li>
              <li><Link to="/portal/settings"><span className={portalSelection == "settings" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("settings")}><img src={settingsIcon} /> Account Settings</span></Link></li>
              <li><span className="portal-nav-option" onClick={logout}><img src={logoutIcon} /> Log Out</span></li>
            </ul>
          </nav>

          <main>
            <Switch>
              <Route path="/portal/dashboard" component={PortalDashboard} />
              <Route path="/portal/terms-of-service" component={PortalTermsService} />
              <Route path="/portal/menu" component={PortalMenu} />
              <Route path="/portal/promotions" component={PortalPromotions} />
              <Route path="/portal/settings" component={PortalSettings} />
            </Switch>
          </main>
        </article>
        :
        <Redirect to="/portal-auth/sign-in" />
      }
    </section>
  );
}

export default Portal;
