import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as customQueries from '../graphql/customQueries';
import * as mutations from '../graphql/mutations';

import RadioButton from '../components/RadioButton';
import bubbleIcon from '../assets/images/bubble-icon-1.svg';
import loadingBubbleIcon from '../assets/images/bubble-icon-1.svg';
import plusButtonIcon from '../assets/images/portal-menu-plus-button.svg';

function PortalMenu(props) {
  const defaultMenuItem = {
    name: "Krabby Patty",
    price: 2.99,
    description: "The signature of the Krusty Krab, a juicy burger with secret ingredients.",
    toppings: [
      { name: "Patty Type", options: ["Crab Patty", "Fish Patty"] }
    ],
  };
  const categoryNameInput = useRef();
  const itemNameInput = useRef();
  const itemPriceInput = useRef();
  const itemDescriptionInput = useRef();
  const itemTagsInput = useRef();
  const itemImageInput = useRef();
  
  const [loading, setLoading] = useState(false);
  const [mode, changeMode] = useState("");
  const [addItemType, setAddItemType] = useState("Regular");
  const [selectedMenuItem, selectMenuItem] = useState(defaultMenuItem);
  const [selectedMenuItemToppings, setSelectedMenuItemToppings] = useState([]); 
  const [selectedMenuItemOptions, setSelectedMenuItemOptions] = useState([]); 
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

  async function getData() {
    setLoading(true);
    const response = await API.graphql(graphqlOperation(customQueries.listMenuCategories, { filter: { menuId: { eq: props.restaurant.id }}}));
    const menuCategoriesList = response.data.listMenuCategorys.items;
    menuCategoriesList.forEach(category => {
      setMenuItems(oldMenuItems => ({
        ...oldMenuItems,
        [category.name]: category.menuItems.items,
      }));
    });
    setLoading(false);
  }

  function addCategory(e) {
    e.preventDefault();
    const menuCategory = {
      menuId: props.restaurant.id,
      name: categoryNameInput.current.value,
    };

    API.graphql({ query: mutations.createMenuCategory, variables: { input: menuCategory } }).then(({ data: { createMenuCategory } }) => {
      console.log("Create Menu Category", createMenuCategory);
      setMenuItems({});
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
      setMenuItems({});
      getData();
      changeMode("");
      selectMenuItem(defaultMenuItem);
    }).catch((error) => {
      console.log(error);
    });
  }

  async function editItem(e) {
    e.preventDefault();

    if (addItemType == "Customizable") {
      
    }

    const menuItem = {
      id: selectedMenuItem.id,
      menuId: props.restaurant.id,
      menuCategoryName: selectedCategory,
      name: itemNameInput.current.value,
      description: itemDescriptionInput.current.value,
      price: itemPriceInput.current.value,
    };

    const response = await API.graphql(graphqlOperation(mutations.updateMenuItem, { input: menuItem }));
    const updatedMenuItem = response.data.updateMenuItem;
    console.log("Update Menu Item", updatedMenuItem);
    setMenuItems({});
    getData();
    changeMode("");
    selectMenuItem(defaultMenuItem);
  }
  
  function deleteItem(e) {
    e.preventDefault();
    const menuItem = {
      id: selectedMenuItem.id
    };

    API.graphql({ query: mutations.deleteMenuItem, variables: { input: menuItem } }).then(({ data: { deleteMenuItem } }) => {
      console.log("Delete Menu Item", deleteMenuItem);
      setMenuItems({});
      getData();
      changeMode("");
      selectMenuItem(defaultMenuItem)
    }).catch((error) => {
      console.log(error);
    });
  }

  function addOption(topping) {
    const option = {
      foodOptionName: topping.foodOptionName, 
      menuId: props.restaurant.id, 
      optionName: "New Option",
      option: { price: null, name: "New Option", menuId: props.restaurant.id }
    };
    topping.optionCat.options.items.push(option);
    topping.numchoices = topping.optionCat.options.items.length;
    selectMenuItem({
      ...selectedMenuItem
    });
    setSelectedMenuItemOptions([...selectedMenuItemOptions, option]);
  }

  function addToppings() {
    const topping = {
      foodOptionName: "New Topping",
      menuId: props.restaurant.id,
      menuItemName: selectedMenuItem.name,
      numchoices: 1,
      optionCat: {
        menuId: props.restaurant.id,
        name: "New Topping",
        options: {
          items: [{
                    foodOptionName: "New Topping", 
                    menuId: props.restaurant.id, 
                    optionName: "New Option",
                    option: { price: null, name: "New Option", menuId: props.restaurant.id }
                  }]
        }
      }
    };
    selectedMenuItem.options.items.push(topping);
    selectMenuItem({
      ...selectedMenuItem
    });
    setSelectedMenuItemToppings([...selectedMenuItemToppings, topping]);
  }

  function editTopping(e, topping) {
    topping.foodOptionName = e.target.value;
    topping.optionCat.name = e.target.value,
    topping.optionCat.options.items.forEach(option => option.foodOptionName = e.target.value);
    setSelectedMenuItemToppings([...selectedMenuItemToppings]);
    // console.log("TPS", selectedMenuItemToppings);
    console.log("SMIT", selectedMenuItem);
  }

  function editOption(e, topping, option) {
    option.optionName = e.target.value;
    option.option.name = e.target.value;
    setSelectedMenuItemOptions([...selectedMenuItemOptions]);
    console.log("SMIO", selectedMenuItem);
  }

  return (
    <article className="portal-menu-container">
    {loading ? 
      <div>
        <header>
          <img className="portal-empty-image" src={loadingBubbleIcon} />
          <span className="subheading">Loading...</span>
        </header>
      </div>  
    :
      <div>
        {mode == "addItem" || mode == "editItem" ?
          <div className="portal-menu-item-form-container">
            <header>
              <span className="orange-heading">New Menu Item</span>
            </header>

            <div className="content">
              <form className="portal-menu-item-form">
                <div className="portal-menu-item-form-type-section">
                  {mode == "editItem" ? 
                    <div>
                      <span className="subheading">Item Type</span>
                      <RadioButton options={["Regular", "Customizable"]} currentChoice={addItemType} setChoice={setAddItemType}/>
                    </div>
                  : ""}
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

                {mode == "editItem" && addItemType == "Customizable"  ? 
                  <div className="portal-menu-item-form-toppings-section">
                    {selectedMenuItem.options.items.map((topping =>
                      <div className="portal-menu-item-form-toppings-container">
                        <span className="subheading">Toppings Name</span>
                        <input className="text-input" type="text" placeholder="Patty Type" onChange={(e) => editTopping(e, topping)} defaultValue={mode == "editItem" && selectedMenuItem.options.items.length > 0 ? topping.foodOptionName : ""}/>

                        <div className="portal-menu-item-form-toppings-options-container">
                          <span className="subheading">Options <button className="blue-plus" type="button" onClick={() => addOption(topping)}><img src={plusButtonIcon} /></button></span>
                          {topping.optionCat.options.items.map((option => 
                            <input className="text-input" type="text" placeholder="Crab Patty" onChange={(e) => editOption(e, topping, option)} defaultValue={mode == "editItem" && topping.optionCat.options.items.length > 0 ? option.optionName : ""}/>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                : ""}
                {mode == "editItem" && addItemType == "Customizable"  ? 
                  <button id="add-category-button" className="blue-text" type="button" onClick={addToppings}><span>+</span> Add Category</button> 
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
                  <div key={category.id} className="menu-category-container">
                    <span className="blue-heading"><span>{category}</span><span><button className="blue-plus" onClick={() => {changeMode("addItem"); selectCategory(category)}}><img src={plusButtonIcon} /></button></span></span>

                    {menuItems[category].map(item => 
                      <div key={item.id} className={selectedMenuItem.id == item.id ? "menu-item-container active" : "menu-item-container"} onClick={() => selectMenuItem(item)}>
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
                    {selectedMenuItem.options.items.length > 0 ?
                      <div>
                        <span className="subheading">Toppings</span>
                        {selectedMenuItem.options.items.map((topping =>
                          <div key={topping.foodOptionName} className="menu-item-description"><b>{topping.foodOptionName}:</b> {topping.optionCat.options.items.map(option => option.optionName).join(", ")}</div>
                        ))}
                      </div>
                    : ""}
                    <button className="orange" onClick={() => {changeMode("editItem"); selectCategory(selectedMenuItem.menuCategoryName); setAddItemType(selectedMenuItem.options.items.length > 0 ? "Customizable" : "Regular")}}>Edit Menu Item</button>
                  </div>
                : ""}
              </div>
              <div className="portal-menu-view-buttons">
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
              <button onClick={() => changeMode("addCategory")}>Create Menu Category</button>
            </div>
          </div>
        }
        </div>
      }
    </article>
  );
}

export default PortalMenu;
