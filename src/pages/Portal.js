import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { getCurrentUser, setupSession, clearSession } from '../utils/session';
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

/*
  PRIORITY LIST:
  Orders and Terms by Wednesday
  Rewards by Next Week
  Dashboard and Menu Later

  DEV STUFF:
  Websockets?
  Hosting?
  Database Schema?
*/

Amplify.configure(awsConfig);

function Portal(props) {
  const [portalSelection, setPortalSelection] = useState(window.location.href.slice(window.location.href.indexOf("/portal/") + "/portal/".length));
  const [loggedIn, setLoggedIn] = useState(getCurrentUser() != null);
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    props.toggleShowHeader(false);
    getData();
  }, []);

  function getData() {
    // const menu = {
    //   name: "Orange",
    //   menuId: "69"
    // };

    // const restaurant = {
    //   // id: "3", 
    //   name: "Ding",
    //   email: "ding@gmail.com",
    //   address: "My Address",
    //   city: "My City",
    //   description: null,
    //   lat: null,
    //   long: null,
    //   phone_number: null,
    //   state: "My State",
    //   zip_code: "My Zip Code",
    // };

    // const user = {
    //   name: "Cat",
    //   email: "cat@gmail.com",
    //   restaurant: {
    //     name: "Ding",
    //     email: "ding@gmail.com",
    //     address: "My Address",
    //     city: "My City",
    //     description: null,
    //     lat: null,
    //     long: null,
    //     phone_number: null,
    //     state: "My State",
    //     zip_code: "My Zip Code",
    //   }
    // }

    // const sampleMenuItem = {
    //   createdAt: "2021-01-06T09:05:34.471Z",
    //   description: null,
    //   id: "120d203d-341b-4f4e-b96d-5df3efdce33f",
    //   menuCategoryName: "Tacos, Bowls, and Burritos",
    //   menuId: "1",
    //   name: "Burrito",
    //   price: 8.95,
    //   updatedAt: "2021-01-06T09:05:34.471Z",
    // };

    // const reward = {
    //   userEmail: "dog@gmail.com",
    //   owner: {
    //     email: "cat@gmail.com",
    //     name: "Cat"
    //   },
    //   menuId: "69",
    //   itemName: "Mouse",
    //   date_active_from: "2/2/21",
    //   date_active_to: "2/3/21",
    //   discountPercentage: 10,
    //   discountAmount: 10,
    //   offer_price: 10,
    // };

    // API.graphql({ query: mutations.createReward , variables: { input: reward } }).then(({ data: { createReward } }) => {
    //   console.log(createReward);
    // }).catch((error) => {
    //   console.log(error);
    // });

    API.graphql({ query: queries.listRestauraunts /*, variables: { input: menu }*/ }).then(({ data: { listRestauraunts } }) => {
      console.log(listRestauraunts);
    }).catch((error) => {
      console.log(error);
    });

    API.graphql({ query: queries.listUsers /*, variables: { input: menu }*/ }).then(({ data: { listUsers } }) => {
      console.log(listUsers);
    }).catch((error) => {
      console.log(error);
    });

    // let email = getCurrentUser().username;

    // API.graphql({ query: queries.listUs, variables: { email: email } }).then(({ data: { getUser } }) => {
    //   console.log(email, getUser);
    // }).catch((error) => {
    //   console.log(error);
    // });
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
              <li><Link to="/portal/orders"><span className={portalSelection == "orders" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("orders")}><img src={ordersIcon} /> Orders</span></Link></li>
              <li><Link to="/portal/terms-of-service"><span className={portalSelection == "terms-of-service" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("terms-of-service")}><img src={termsServiceIcon} /> Terms of Service</span></Link></li>
              <li><Link to="/portal/menu"><span className={portalSelection == "menu" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("menu")}><img src={menuIcon} /> Your Menu</span></Link></li>
              <li><Link to="/portal/rewards"><span className={portalSelection == "rewards" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("rewards")}><img src={rewardsIcon} /> Your Active Rewards</span></Link></li>
              <li><Link to="/portal/settings"><span className={portalSelection == "settings" ? "portal-nav-option active" : "portal-nav-option"} onClick={() => setPortalSelection("settings")}><img src={settingsIcon} /> Account Settings</span></Link></li>
              <li><span className="portal-nav-option" onClick={logout}><img src={logoutIcon} /> Log Out</span></li>
            </ul>
          </nav>

          <main>
            <Switch>
              <Route path="/portal/dashboard" component={PortalDashboard} />
              <Route path="/portal/orders" component={PortalOrders} />
              <Route path="/portal/terms-of-service" component={PortalTermsService} />
              <Route path="/portal/menu" component={PortalMenu} />
              <Route path="/portal/rewards" component={PortalRewards} />
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
