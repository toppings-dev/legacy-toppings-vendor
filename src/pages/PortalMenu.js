import React, { useState, useEffect, useRef } from 'react';

import RadioButton from '../components/RadioButton';
import bubbleIcon from '../assets/images/bubble-icon-1.svg';
import plusButtonIcon from '../assets/images/portal-menu-plus-button.svg';

function PortalMenu(props) {
  const addItemName = useRef();

  const [mode, changeMode] = useState("");
  const [addItemType, setAddItemType] = useState("Regular");
  const [selectedMenuItem, selectMenuItem] = useState(null);
  const [menuItems, setMenuItems] = useState({
    Appetizers: [{id: 1, name: "Golden Loaf", price: "2.50", description: "A loaf that is golden."}, 
                   {id: 2, name: "Fried Oyster Skins", price: "0.99", description: "Oyster skins that are fried."}],
    Entrees: [{id: 3, name: "Krabby Patty", price: "2.99", description: "The signature of the Krusty Krab, a juicy burger with secret ingredients."}, 
                {id: 4, name: "Jelly Patty", price: "3.99", description: "A Krabby Patty with jellyfish jelly."}],
    Desserts: [{id: 5, name: "Seanut Brittle", price: "2.43", description: "Hard sugar candy pieces with seanuts inside."}]
  });

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
                <textarea className="text-input" type="text" placeholder="The signature of the Krusty Krab, a juicy burger with secret ingredients." ref={addItemName} />
              </div>
              
              <div className="portal-menu-item-form-tags-section">
                <span className="subheading">Item Tags</span>
                <input className="text-input" type="text" placeholder="Seafood" ref={addItemName} />
              </div>
              
              <div className="portal-menu-item-form-image-section">
                <span className="subheading">Upload Image</span>
                <div className="image-input-wrapper">
                  <label htmlFor="portal-menu-item-form-image-input" className="image-upload">Upload an Image</label>
                  <input id="portal-menu-item-form-image-input" className="image-input" type="file" ref={addItemName} hidden />
                </div>
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
      : mode == "addCategory" ? 
        <div className="portal-menu-category-form-container">
          <header>
            <span className="orange-heading">New Menu Category</span>
          </header>
        </div>
      : Object.keys(menuItems).length > 0 ? 
        <div className="portal-menu-list-container">
          <header>
            <span className="orange-heading">Your Menu</span>
          </header>

          <div className="content">
            <div className="portal-menu-list">
              {Object.keys(menuItems).map((category =>
                <div className="menu-category-container">
                  <span className="blue-heading">{category}</span>

                  {menuItems[category].map(item => 
                    <div key={item.id} className={selectedMenuItem == item ? "menu-item-container active" : "menu-item-container"} onClick={() => selectMenuItem(item)}>
                      <span className="subheading">{item.name}</span>
                      <span className="subheading">${item.price}</span>
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
                <span className="blue-heading">${selectedMenuItem.price}</span>
                <span className="subheading">Description</span>
                <div className="menu-item-description">{selectedMenuItem.description}</div>
              </div>
              : ""}
            </div>
            <div>
              <button onClick={() => changeMode("addItem")}>Add Menu Item</button>
              <button onClick={() => changeMode("addCategory")}>Create Category</button>
            </div>
          </div>
        </div>
      : 
        <div>
          <header>
            <img className="portal-empty-image" src={bubbleIcon} />
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
