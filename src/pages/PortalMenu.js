import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

import RadioButton from '../components/RadioButton';
import bubbleIcon from '../assets/images/bubble-icon-1.svg';
import plusButtonIcon from '../assets/images/portal-menu-plus-button.svg';

function PortalMenu(props) {
  const defaultMenuItem = {
    name: "Krabby Patty",
    price: 2.99,
    description: "The signature of the Krusty Krab, a juicy burger with secret ingredients.",
  };
  const categoryNameInput = useRef();
  const itemNameInput = useRef();
  const itemPriceInput = useRef();
  const itemDescriptionInput = useRef();
  const itemTagsInput = useRef();
  const itemImageInput = useRef();

  const [mode, changeMode] = useState("");
  const [addItemType, setAddItemType] = useState("Regular");
  const [selectedMenuItem, selectMenuItem] = useState(defaultMenuItem);
  const [selectedCategory, selectCategory] = useState(null);
  // const [menuItems, setMenuItems] = useState({
  //   Appetizers: [{id: 1, name: "Golden Loaf", price: "2.50", description: "A loaf that is golden."}, 
  //                  {id: 2, name: "Fried Oyster Skins", price: "0.99", description: "Oyster skins that are fried."}],
  //   Entrees: [{id: 3, name: "Krabby Patty", price: "2.99", description: "The signature of the Krusty Krab, a juicy burger with secret ingredients."}, 
  //               {id: 4, name: "Jelly Patty", price: "3.99", description: "A Krabby Patty with jellyfish jelly."}],
  //   Desserts: [{id: 5, name: "Seanut Brittle", price: "2.43", description: "Hard sugar candy pieces with seanuts inside."}]
  // });
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    API.graphql({ query: queries.listMenuCategorys }).then(({ data: { listMenuCategorys } }) => {
      let restaurantMenuCategories = listMenuCategorys.items.filter(category => category.menuId == props.restaurant.id);
      restaurantMenuCategories.forEach(category => {
        let restaurantMenuItems = [];
        API.graphql({ query: queries.listMenuItems }).then(({ data: { listMenuItems } }) => {
          restaurantMenuItems = listMenuItems.items.filter(item => item.menuId == props.restaurant.id && item.menuCategoryName == category.name);
          setMenuItems(oldMenuCategories => ({
            ...oldMenuCategories,
            [category.name]: restaurantMenuItems
          }));
        }).catch((error) => {
          console.log(error);
        });
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  function addCategory(e) {
    e.preventDefault();
    const menuCategory = {
      menuId: props.restaurant.id,
      name: categoryNameInput.current.value,
    };

    API.graphql({ query: mutations.createMenuCategory, variables: { input: menuCategory } }).then(({ data: { createMenuCategory } }) => {
      console.log("Create Menu Category", createMenuCategory);
      getData();
      changeMode("");
      selectMenuItem(defaultMenuItem);
    }).catch((error) => {
      console.log(error);
    });
  }

  function addItem(e) {
    e.preventDefault();
    const menuItem = {
      menuId: props.restaurant.id,
      menuCategoryName: selectedCategory,
      name: itemNameInput.current.value,
      description: itemDescriptionInput.current.value,
      price: itemPriceInput.current.value,
    };

    API.graphql({ query: mutations.createMenuItem, variables: { input: menuItem } }).then(({ data: { createMenuItem } }) => {
      console.log("Create Menu Item", createMenuItem);
      getData();
      changeMode("");
      selectMenuItem(defaultMenuItem);
    }).catch((error) => {
      console.log(error);
    });
  }

  function editItem(e) {
    e.preventDefault();
    const menuItem = {
      id: selectedMenuItem.id,
      menuId: props.restaurant.id,
      menuCategoryName: selectedCategory,
      name: itemNameInput.current.value,
      description: itemDescriptionInput.current.value,
      price: itemPriceInput.current.value,
    };

    API.graphql({ query: mutations.updateMenuItem, variables: { input: menuItem } }).then(({ data: { updateMenuItem } }) => {
      console.log("Update Menu Item", updateMenuItem);
      getData();
      changeMode("");
      selectMenuItem(defaultMenuItem);
    }).catch((error) => {
      console.log(error);
    });
  }
  
  function deleteItem(e) {
    e.preventDefault();
    const menuItem = {
      id: selectedMenuItem.id
    };

    API.graphql({ query: mutations.deleteMenuItem, variables: { input: menuItem } }).then(({ data: { deleteMenuItem } }) => {
      console.log("Delete Menu Item", deleteMenuItem);
      getData();
      changeMode("");
      selectMenuItem(defaultMenuItem)
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <article className="portal-menu-container">
      {mode == "addItem" || mode == "editItem" ?
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
                <input className="text-input" type="text" placeholder="Krabby Patties" ref={itemNameInput} defaultValue={mode == "editItem" ? selectedMenuItem.name : ""} />
              </div>
              
              <div className="portal-menu-item-form-price-section">
                <span className="subheading">Item Price</span>
                <label for="price">$</label><input id="menu-item-price-input" className="text-input" type="text" placeholder="2.99" ref={itemPriceInput} defaultValue={mode == "editItem" ? selectedMenuItem.price.toFixed(2) : ""} />
              </div>
              
              <div className="portal-menu-item-form-description-section">
                <span className="subheading">Item Description</span>
                <textarea className="text-input" type="text" placeholder="The signature of the Krusty Krab, a juicy burger with secret ingredients." ref={itemDescriptionInput} defaultValue={mode == "editItem" ? selectedMenuItem.description : ""} />
              </div>
              
              <div className="portal-menu-item-form-tags-section">
                <span className="subheading">Item Tags</span>
                <input className="text-input" type="text" placeholder="Seafood" ref={itemTagsInput} />
              </div>
              
              <div className="portal-menu-item-form-image-section">
                <span className="subheading">Upload Image</span>
                <div className="image-input-wrapper">
                  <label htmlFor="portal-menu-item-form-image-input" className="image-upload">Upload an Image</label>
                  <input id="portal-menu-item-form-image-input" className="image-input" type="file" ref={itemImageInput} hidden />
                </div>
              </div>

              {addItemType == "Customizable" ? 
                <div className="portal-menu-item-form-toppings-section">
                  <div className="portal-menu-item-form-toppings-container">
                    <span className="subheading">Toppings Name</span>
                    <input className="text-input" type="text" placeholder="Patty Type" ref={itemNameInput} />

                    <div className="portal-menu-item-form-toppings-options-container">
                      <span className="subheading">Options <img src={plusButtonIcon} /></span>
                      <input className="text-input" type="text" placeholder="Crab Patty" ref={itemNameInput} />
                      <input className="text-input" type="text" placeholder="Fish Patty" ref={itemNameInput} />
                    </div>
                  </div>

                  <div className="portal-menu-item-form-toppings-container">
                    <span className="subheading">Toppings Name</span>
                    <input className="text-input" type="text" placeholder="Patty Type" ref={itemNameInput} />

                    <div className="portal-menu-item-form-toppings-options-container">
                      <span className="subheading">Options <img src={plusButtonIcon} /></span>
                      <input className="text-input" type="text" placeholder="Crab Patty" ref={itemNameInput} />
                      <input className="text-input" type="text" placeholder="Fish Patty" ref={itemNameInput} />
                      <button className="blue-text"><span>+</span> Add Category</button>
                    </div>
                  </div>
                </div>
              : ""}
            </form>
            
            <div className="portal-menu-item-form-submit-section">
              <div>
                {mode == "editItem" ? 
                  <button className="red-text" onClick={deleteItem}>Delete</button>
                : ""}
              </div>
              <div>
                <button className="orange-text" onClick={() => changeMode("")}>Cancel</button>
                <button className="orange" onClick={mode == "addItem" ? addItem : editItem}>{mode == "addItem" ? "Add" : "Save"} Menu Item</button>
              </div>
            </div>
          </div>
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
                  <span className="blue-heading"><span>{category}</span><span><button className="blue-plus"><img onClick={() => {changeMode("addItem"); selectCategory(category)}} src={plusButtonIcon} /></button></span></span>

                  {menuItems[category].map(item => 
                    <div key={item.id} className={selectedMenuItem == item ? "menu-item-container active" : "menu-item-container"} onClick={() => selectMenuItem(item)}>
                      <span className="subheading">{item.name}</span>
                      <span className="subheading">${item.price.toFixed(2)}</span>
                      <div className="menu-item-description">{item.description}</div>
                    </div>
                  )}
                </div> 
              ))} 
            </div>
            <div className="portal-menu-view">
              {selectedMenuItem != null && selectedMenuItem.name != defaultMenuItem.name ? 
                <div>
                  <span className="orange-heading">{selectedMenuItem.name}</span>
                  <span className="blue-heading">${selectedMenuItem.price.toFixed(2)}</span>
                  <span className="subheading">Description</span>
                  <div className="menu-item-description">{selectedMenuItem.description}</div>
                  <button className="orange" onClick={() => changeMode("editItem")}>Edit Menu Item</button>
                </div>
              : ""}
            </div>
            <div className="portal-menu-view-buttons">
              {/*<button className="orange" onClick={() => changeMode("addItem")}>Add Menu Item</button>*/}
              <button className="orange" onClick={() => changeMode("addCategory")}>Create Category</button>
            </div>
          </div>

          {mode == "addCategory" ?
            <div className="portal-category-form-container">
              <button className="close" onClick={() => changeMode("")}>&#10005;</button>
              <span className="subheading">Category Name</span>
              <form className="portal-category-form">
                  <input className="text-input" type="text" placeholder="Category" ref={categoryNameInput} />
                  <button onClick={addCategory}>Create Category</button>
              </form>
            </div>
          : ""}
        </div>
      : 
        <div>
          {mode == "addCategory" ?
            <div className="portal-category-form-container">
              <button className="close" onClick={() => changeMode("")}>&#10005;</button>
              <span className="subheading">Category Name</span>
              <form className="portal-category-form">
                  <input className="text-input" type="text" placeholder="Category" ref={categoryNameInput} />
                  <button onClick={addCategory}>Create Category</button>
              </form>
            </div>
          : ""}

          <header>
            <img className="portal-empty-image" src={bubbleIcon} />
            <span className="subheading">You have no items in your menu.</span>
            <b>Start adding your menu items by clicking the buttons <br /> below!</b>
          </header>

          <div className="content">
            {/*<button onClick={() => changeMode("addItem")}>Add Menu Item</button>*/}
            <button onClick={() => changeMode("addCategory")}>Create Menu Category</button>
          </div>
        </div>
      }
    </article>
  );
}

export default PortalMenu;
