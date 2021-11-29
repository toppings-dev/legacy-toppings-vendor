import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { useQuery } from '@apollo/client';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as customQueries from '../graphql/customQueries';
import * as mutations from '../graphql/mutations';
import { getCurrentUser, setCurrentUser, getCurrentPage, setCurrentPage, clearSession } from '../utils/session';
import PortalDashboard from './PortalDashboard';
import PortalOrders from './PortalOrders';
import PortalTermsService from './PortalTermsService';
import PortalMenu from './PortalMenu';
import PortalRewards from './PortalRewards';
import PortalSettings from './PortalSettings';

import logo from '../assets/images/logo-white.png';
import dashboardIcon from '../assets/images/portal-dashboard-icon.svg';
import ordersIcon from '../assets/images/portal-orders-icon.svg';
import termsServiceIcon from '../assets/images/portal-terms-service-icon.svg';
import menuIcon from '../assets/images/portal-menu-icon.svg';
import rewardsIcon from '../assets/images/portal-rewards-icon.svg';
import settingsIcon from '../assets/images/portal-settings-icon.svg';
import logoutIcon from '../assets/images/portal-logout-icon.svg';

Amplify.configure(awsConfig);

function Portal(props) {
  const [portalSelection, setPortalSelection] = useState(window.location.href.slice(window.location.href.indexOf("/portal/") + "/portal/".length));
  const [loggedIn, setLoggedIn] = useState(getCurrentUser() != null);
  const [restaurant, setRestaurant] = useState({});
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    props.toggleShowHeader(false);
    console.log("U", props.user)
  }, []);

  let { data: vendorData, error: vendorError, loading: vendorLoading } = useQuery(customQueries.getVendor);
  if (vendorData) {
    console.log("vendor", vendorData)
  }
  if (vendorError) console.log("vendorerror", vendorError);

  // async function getData() {
  //   // await props.setUser(getCurrentUser());
  //   // console.log("PU", props.user)
  //   // console.log("PU", getCurrentUser())
  //   // if (getCurrentUser().hasOwnProperty("username")) {
  //     // await login();
  //     console.log("GD")
  //     const userId = await getCurrentUser() == null ? props.user.sub : await getCurrentUser().cognitoId;
  //     console.log("GET RESTU", userId)
  //     const restaurantsResponse = await API.graphql(graphqlOperation(customQueries.getRestaurantByOwner, { userId }));
  //     console.log("HELOOOOOOO");
  //     console.log("Set restaurant resp", restaurantsResponse);
  //     const restaurant = restaurantsResponse.data.getRestaurantByOwner;
  //     setRestaurant(restaurant);
  //     console.log("Set restaurant props", restaurant);
  //   // }
  // }

  async function login() {
    console.log("LOGIN");
    // await Auth.signIn(getCurrentUser());
  }

  function toggleSideBar() {
    setSideBar(!sideBar);
    console.log("toggle", sideBar);
  }

  function logout() {
    Auth.signOut().then(() => {
      setLoggedIn(false);
      clearSession("user");
      clearSession("page");
      props.toggleShowHeader(true);
    }).catch((error) => {
      console.log("Error signing out", error);
    });
  }
  if (vendorLoading) return null;
  if (vendorError) {
    console.log('error', vendorError);
    return null;
  }
  console.log("vendorrrrr", vendorData.getVendor.restaurant);
  return (
    <section className="portal-login-container">
      {loggedIn ?
        <article className="portal-container">
          <div>
            <button style={{position: "absolute", marginLeft: "20px"}} className="orange" onClick={() => toggleSideBar()}>Toggle Sidebar</button>
          </div>
          {sideBar ? 
            <nav>
              <Link to="/"><img className="portal-toppings-logo" src={logo} /></Link>
              <ul className="nav-buttons">
                {/*<li><Link to="/portal/dashboard"><span className={portalSelection == "dashboard" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("dashboard")}><img src={dashboardIcon} /> Dashboard</span></Link></li>*/}
                <li><Link to="/portal/orders" onClick={() => setCurrentPage("orders")}><span className={portalSelection == "orders" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("orders")}><img src={ordersIcon} /> Orders</span></Link></li>
                <li><Link to="/portal/terms-of-service" onClick={() => setCurrentPage("terms-of-service")}><span className={portalSelection == "terms-of-service" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("terms-of-service")}><img src={termsServiceIcon} /> Terms of Service</span></Link></li>
                <li><Link to="/portal/menu" onClick={() => setCurrentPage("menu")}><span className={portalSelection == "menu" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("menu")}><img src={menuIcon} /> Your Menu</span></Link></li>
                <li><Link to="/portal/rewards" onClick={() => setCurrentPage("rewards")}><span className={portalSelection == "rewards" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("rewards")}><img src={rewardsIcon} /> Your Active Rewards</span></Link></li>
                <li><Link to="/portal/settings" onClick={() => setCurrentPage("settings")}><span className={portalSelection == "settings" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("settings")}><img src={settingsIcon} /> Account Settings</span></Link></li>
                <li><span className="portal-nav-option" onClick={logout}><img src={logoutIcon} /> Log Out</span></li>
              </ul>
              <div className="portal-version-label">Version 2.0.1</div>
            </nav>
          : 
          ""
          }
          

          <main>
            <Switch>
              <Route path="/portal/dashboard" component={() => <PortalDashboard restaurant={vendorData.getVendor.restaurant} />} />
              <Route path="/portal/orders" component={() => <PortalOrders vendor={vendorData} />} />
              <Route path="/portal/terms-of-service" component={() => <PortalTermsService restaurant={vendorData.getVendor.restaurant} />} />
              <Route path="/portal/menu" component={() => <PortalMenu vendor={vendorData} />} />
              <Route path="/portal/rewards" component={() => <PortalRewards vendor={vendorData} />} />
              <Route path="/portal/settings" component={() => <PortalSettings restaurant={vendorData.getVendor.restaurant} />} />
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
