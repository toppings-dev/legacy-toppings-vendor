import React, { useState, useEffect, useRef } from 'react';

import bubbleIcon from '../assets/images/bubble-icon-2.svg';

function PortalPromotions(props) {
  const [mode, changeMode] = useState("");

  const [selectedMenuItem, selectMenuItem] = useState(null);
  const [menuItems, setMenuItems] = useState({
    Rewards: [{id: 1, name: "Jelly Joy", price: 5, description: "10% discount on all jelly patties."}, 
              {id: 2, name: "Krabby Patty Happy Hour", price: 5, description: "10% discount on all Krabby Patties at 12PM."},
              {id: 3, name: "Seanut Superstar", price: 10, description: "Buy one get one free Seanut Brittle."},]
  });

  return (
    <article className="portal-promotions-container">
      {Object.keys(menuItems).length > 0 ? 
        <div className="portal-menu-list-container">
          <header>
            <span className="orange-heading">Active Rewards</span>
          </header>

          <div className="content">
            <div className="portal-menu-list">
              {Object.keys(menuItems).map((category =>
                <div className="menu-category-container">
                  <span className="blue-heading"></span>

                  {menuItems[category].map(item => 
                    <div key={item.id} className={selectedMenuItem == item ? "menu-item-container active" : "menu-item-container"} onClick={() => selectMenuItem(item)}>
                      <span className="subheading">{item.name}</span>
                      <span className="subheading">{item.price} points</span>
                      <div className="menu-item-description">{item.description}</div>
                    </div>
                  )}
                </div> 
              ))} 
            </div>
            <div className="portal-menu-view">
              {selectedMenuItem != null ? 
              <div>
                <span className="orange-heading">{selectedMenuItem.name}</span>
                <span className="blue-heading">{selectedMenuItem.price} points</span>
                <span className="subheading">Description</span>
                <div className="menu-item-description">{selectedMenuItem.description}</div>
              </div>
              : ""}
            </div>
          </div>
        </div>
      :
        <div>
          <header>
            <img className="portal-empty-image" src={bubbleIcon} />
            <span className="subheading">You have no active promotions.</span>
            <b>Get users excited by adding promotions + <br /> reward opportunities!</b>
          </header>

          <div className="content">
            <button>Add Promotion</button>
          </div>
        </div>
      }
    </article>
  );
}

export default PortalPromotions;
