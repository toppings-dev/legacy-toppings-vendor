import React, { useState, useEffect, useRef } from 'react';

import bubbleIcon from '../assets/images/bubble-icon-1.svg';

function PortalMenu(props) {
  const [mode, changeMode] = useState("");

  return (
    <article className="portal-menu-container">
      {mode == "addItem" ?
        <div className="portal-menu-item-form-container">
          <header>
            <span className="orange-heading">New Menu Item</span>
          </header>
        </div>
      :
      mode == "addCategory" ? 
        <div className="portal-menu-category-form-container">
          <header>
            <span className="orange-heading">New Menu Category</span>
          </header>
        </div>
      :
        <div>
          <header>
            <img src={bubbleIcon} />
            <span className="subheading">You have no items in your menu.</span>
            <b>Start adding your menu items by clicking the buttons <br /> below!</b>
          </header>

          <div className="content">
            <button onClick={() => changeMode("addItem")}>Add Menu Item</button>
            <button onClick={() => changeMode("addCategory")}>Create Category</button>
          </div>
        </div>
      }
    </article>
  );
}

export default PortalMenu;
