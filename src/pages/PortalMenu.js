import React, { useState, useEffect, useRef } from 'react';

import RadioButton from '../components/RadioButton';
import bubbleIcon from '../assets/images/bubble-icon-1.svg';
import plusButtonIcon from '../assets/images/portal-menu-plus-button.svg';

function PortalMenu(props) {
  const addItemName = useRef();

  const [mode, changeMode] = useState("addItem");
  const [addItemType, setAddItemType] = useState("Regular");

  return (
    <article className="portal-menu-container">
      {mode == "addItem" ?
        <div className="portal-menu-item-form-container">
          <header>
            <span className="orange-heading">New Menu Item</span>
          </header>

          <div className="content">
            <form className="portal-menu-item-form">
              <div className="portal-menu-item-form-type-section">
                <span className="subheading">Item Type</span>
                <RadioButton options={["Regular", "Customizable"]} currentChoice={addItemType} setChoice={setAddItemType}/>
              </div>
              
              <div className="portal-menu-item-form-name-section">
                <span className="subheading">Item Name</span>
                <input className="text-input" type="text" placeholder="Krabby Patties" ref={addItemName} />
              </div>
              
              <div className="portal-menu-item-form-price-section">
                <span className="subheading">Item Price</span>
                <label for="price">$</label><input id="menu-item-price-input" className="text-input" type="text" placeholder="2.99" ref={addItemName} />
              </div>
              
              <div className="portal-menu-item-form-description-section">
                <span className="subheading">Item Description</span>
                <textarea className="text-input" type="text" placeholder="A Krabby Patty is a hamburger sold by the Krusty Krab." ref={addItemName} />
              </div>
              
              <div className="portal-menu-item-form-tags-section">
                <span className="subheading">Item Tags</span>
                <input className="text-input" type="text" placeholder="Seafood" ref={addItemName} />
              </div>
              
              <div className="portal-menu-item-form-image-section">
                <span className="subheading">Upload Image</span>
                <input className="text-input" type="file" ref={addItemName} />
              </div>

              {addItemType == "Customizable" ? 
              <div className="portal-menu-item-form-toppings-section">
                <div className="portal-menu-item-form-toppings-container">
                  <span className="subheading">Toppings Name</span>
                  <input className="text-input" type="text" placeholder="Patty Type" ref={addItemName} />

                  <div className="portal-menu-item-form-toppings-options-container">
                    <span className="subheading">Options <img src={plusButtonIcon} /></span>
                    <input className="text-input" type="text" placeholder="Crab Patty" ref={addItemName} />
                    <input className="text-input" type="text" placeholder="Fish Patty" ref={addItemName} />
                  </div>
                </div>

                <div className="portal-menu-item-form-toppings-container">
                  <span className="subheading">Toppings Name</span>
                  <input className="text-input" type="text" placeholder="Patty Type" ref={addItemName} />

                  <div className="portal-menu-item-form-toppings-options-container">
                    <span className="subheading">Options <img src={plusButtonIcon} /></span>
                    <input className="text-input" type="text" placeholder="Crab Patty" ref={addItemName} />
                    <input className="text-input" type="text" placeholder="Fish Patty" ref={addItemName} />
                    <button className="blue-text"><span>+</span> Add Category</button>
                  </div>
                </div>
              </div>
              : ""}
            </form>
            
            <div className="portal-menu-item-form-submit-section">
                <button className="orange-text" onClick={() => changeMode("")}>Cancel</button>
                <button className="orange">Add Menu Item</button>
              </div>
          </div>
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
