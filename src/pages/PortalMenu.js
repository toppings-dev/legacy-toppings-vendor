import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as customQueries from '../graphql/customQueries';
import * as customMutations from '../graphql/customMutations';
import * as mutations from '../graphql/mutations';

import RadioButton from '../components/RadioButton';
import bubbleIcon from '../assets/images/bubble-icon-1.svg';
import loadingBubbleIcon from '../assets/images/bubble-icon-1.svg';
import plusButtonIcon from '../assets/images/portal-menu-plus-button.svg';
import xButtonIcon from '../assets/images/portal-menu-x-button.svg';
import { graphql } from '@apollo/react-hoc';

function PortalMenu(props) {
  const defaultMenuItem = {
    name: "Krabby Patty",
    price: 2.99,
    description: "The signature of the Krusty Krab, a juicy burger with secret ingredients.",
    options: { items: [] }
  };
  let restaurantSk = props.vendor.getVendor.restaurant.sk;
  let restaurantId = restaurantSk.slice(restaurantSk.lastIndexOf("#")+1)
  console.log("chop chop", restaurantId);

  const categoryNameInput = useRef();
  const itemNameInput = useRef();
  const itemPriceInput = useRef();
  const itemDescriptionInput = useRef();
  const itemTagsInput = useRef();
  const itemImageInput = useRef();
  //const restaurantId = props.vendorData.slice(props.vendorData.lastIndexOf('#')+1);
  
  
  const [loading, setLoading] = useState(false);
  const [mode, changeMode] = useState("");
  const [addItemType, setAddItemType] = useState("Regular");
  const [selectedMenuItem, setSelectedMenuItem] = useState(defaultMenuItem);
  const [selectedMenuItemToppings, setSelectedMenuItemToppings] = useState([]);
  const [selectedMenuItemOptions, setSelectedMenuItemOptions] = useState([]);
  const [selectedMenuItemExistingToppings, setSelectedMenuItemExistingToppings] = useState([]);
  const [existingToppings, setExistingToppings] = useState([]);
  const [removableToppings, setRemoveableToppings] = useState([]);
  const [removableOptions, setRemoveableOptions] = useState([]);
  const [selectedCategory, selectCategory] = useState(null);
  const [hasMenu, setHasMenu] = useState(false);
  // const [menuItems, setMenuItems] = useState({
  //   Appetizers: [{id: 1, name: "Golden Loaf", price: "2.50", description: "A loaf that is golden."}, 
  //                  {id: 2, name: "Fried Oyster Skins", price: "0.99", description: "Oyster skins that are fried."}],
  //   Entrees: [{id: 3, name: "Krabby Patty", price: "2.99", description: "The signature of the Krusty Krab, a juicy burger with secret ingredients."}, 
  //               {id: 4, name: "Jelly Patty", price: "3.99", description: "A Krabby Patty with jellyfish jelly."}],
  //   Desserts: [{id: 5, name: "Seanut Brittle", price: "2.43", description: "Hard sugar candy pieces with seanuts inside."}]
  // });
  const [menuItems, setMenuItems] = useState({});
  const [menuCategoriesList, setMenuCategoriesList] = useState({});
  
  useEffect(() => {
    getData();
  }, []);
  
  console.log("props", props);
  function getData() {
    setLoading(true);
    //replace with smth to do with get menu
    // const response = await API.graphql(graphqlOperation(customQueries.listMenuCategories, { filter: { menuId: { eq: restaurantId }}}));
    // const menuCategoriesList = response.data.listMenuCategorys.items;
    // menuCategoriesList.forEach(category => {
    //   setMenuItems(oldMenuItems => ({
    //     ...oldMenuItems,
    //     [category.name]: category.menuItems.items,
    //   }));
    // });
    
    const categories = props.vendor.getVendor.restaurant.menu;
    setMenuCategoriesList(categories);

    console.log(props.vendor.getVendor.restaurant.menu);
    console.log("menucategories", menuCategoriesList);
    Array.from(categories).forEach(category => {
      setMenuItems(oldMenuItems => ({
        ...oldMenuItems,
        [category.name]: category.menuItems,
      }));
    });
    console.log("menu items", menuItems);
    console.log("default", defaultMenuItem);
    setHasMenu(true);
    setLoading(false);
  }

  function addCategory(e) {
    e.preventDefault();
    const menuCategory = {
      menuId: restaurantId,
      name: categoryNameInput.current.value,
    };

    API.graphql(graphqlOperation(customMutations.createMenuCategory, menuCategory))
    .then(createMenuCategoryResp => {
      setMenuItems({});
      getData();
      changeMode('');
      setSelectedMenuItem(defaultMenuItem);
    })
    .catch(err => {
      console.log(err);
    });
  }

  async function createToppings(menuItem) {
    // const existingToppingCategoriesResponse = await API.graphqlOperation(queries.listFoodOptions, { filter: { menuId: { eq: restaurantId }}});
    // const existingToppingCategories = existingToppingCategoriesResponse.data.listFoodOptions.items;
    console.log("D", menuItem);
    const createToppingsInput = {
      id: restaurantId,
      selectedMenuItemToppings: JSON.stringify(selectedMenuItemToppings),
      selectedMenuItemOptions: JSON.stringify(selectedMenuItemOptions),
      selectedMenuItemExistingToppings: JSON.stringify(selectedMenuItemExistingToppings),
      menuItem: JSON.stringify(menuItem),
    };

    console.log("selected options", selectedMenuItemOptions);
    console.log("selected existing", selectedMenuItemExistingToppings);
    console.log("selected toppings", selectedMenuItemToppings);
    await API.graphql(graphqlOperation(customMutations.createToppings, createToppingsInput));
    // await Promise.all(selectedMenuItemToppings.map(async topping => {
    //   const toppingCategory = {
    //     menuId: restaurantId,
    //     name: topping.foodOptionName
    //   };
    //   // console.log("TP", topping)
      
    //   const toppingCategoryResponse = await API.graphql(graphqlOperation(mutations.createFoodOption, { input: toppingCategory }));
    //   console.log("Creating Category", toppingCategoryResponse);
    // }));

    // await Promise.all(selectedMenuItemOptions.map(async option => {
    //   const toppingOption = {
    //     menuId: restaurantId,
    //     name: option.optionName,
    //   };

    //   const toppingOptionResponse = await API.graphql(graphqlOperation(mutations.createOption, { input: toppingOption }));
    //   console.log("Creating Option", toppingOptionResponse);
    // }));
    
    // await Promise.all(selectedMenuItemToppings.concat(selectedMenuItemExistingToppings).map(async topping => {
    //   const toppingCategoryJoiner = {
    //     menuId: restaurantId,
    //     foodOptionName: topping.foodOptionName,
    //     menuItemName: menuItem.name,
    //     numchoices: topping.numchoices,
    //   };
    //   console.log(toppingCategoryJoiner);

    //   const toppingCategoryJoinerResponse = await API.graphql(graphqlOperation(mutations.createItemOptionCatJoin, { input: toppingCategoryJoiner }));
    //   console.log("Creating Category Joiner", toppingCategoryJoinerResponse);
    // }));
    
    // await Promise.all(selectedMenuItemOptions.map(async option => {
    //   console.log("Making Options!!!")
    //   const toppingOptionJoiner = {
    //     menuId: restaurantId,
    //     foodOptionName: option.foodOptionName,
    //     optionName: option.optionName,
    //   };

    //   const toppingOptionJoinerResponse = await API.graphql(graphqlOperation(mutations.createItemOptionOptionJoin, { input: toppingOptionJoiner }));
    //   console.log("Creating Option Joiner", toppingOptionJoinerResponse);
    // }));

    setSelectedMenuItemToppings([]);
    setSelectedMenuItemOptions([]);
    setSelectedMenuItemExistingToppings([]);
  }

  async function addItem(e) {
    e.preventDefault();

    const menuItem = {
      menuId: restaurantId,
      menuCategoryName: selectedCategory,
      name: itemNameInput.current.value,
      description: itemDescriptionInput.current.value,
      price: itemPriceInput.current.value,
    };

    const resp = await API.graphql(graphqlOperation(customMutations.createMenuItem, menuItem));
    const newMenuItem = resp.data.createMenuItem;
    // const response = await API.graphql(graphqlOperation(mutations.createMenuItem, { input: menuItem }));
    // const newMenuItem = response.data.createMenuItem;
    console.log("Create Menu Item", newMenuItem);
    
    // if (addItemType == "Customizable") {
    //   await createToppings(newMenuItem);
    // }

    setMenuItems({});
    getData();
    changeMode("");
    setSelectedMenuItem(defaultMenuItem);
  }

  async function editItem(e) {
    e.preventDefault();

    if (addItemType === "Customizable") {
      await createToppings(selectedMenuItem);
    }

    const menuItem = {
      id: selectedMenuItem.id,
      menuId: restaurantId,
      menuCategoryName: selectedCategory,
      name: itemNameInput.current.value,
      description: itemDescriptionInput.current.value,
      price: itemPriceInput.current.value,
    };

    console.log("MI", menuItem)

    // const response = await API.graphql(graphqlOperation(mutations.updateMenuItem, { input: menuItem }));
    // const updatedMenuItem = response.data.updateMenuItem;
    const resp = await API.graphql(graphqlOperation(customMutations.updateMenuItem, menuItem));
    const updatedMenuItem = resp.data.updatedMenuItem;

    console.log("Update Menu Item", updatedMenuItem);
    setMenuItems({});
    getData();
    changeMode("");
    setSelectedMenuItem(defaultMenuItem);
  }
  
  function deleteItem(e) {
    e.preventDefault();
    const menuItem = {
      id: selectedMenuItem.id
    };

    API.graphql(graphqlOperation(customMutations.deleteMenuItem, menuItem))
    .then(deleteMenuItem => {
      console.log('DELETED MENU ITEM', deleteMenuItem);
      setMenuItems({});
      getData();
      changeMode('');
      setSelectedMenuItem(defaultMenuItem);
    })
    .catch(err => {
      console.log(err);
    })
    // API.graphql({ query: mutations.deleteMenuItem, variables: { input: menuItem } }).then(({ data: { deleteMenuItem } }) => {
    //   console.log("Delete Menu Item", deleteMenuItem);
    //   setMenuItems({});
    //   getData();
    //   changeMode("");
    //   setSelectedMenuItem(defaultMenuItem)
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  function addOption(topping) {
    const option = {
      foodOptionName: topping.foodOptionName, 
      menuId: restaurantId, 
      optionName: "New Option",
      option: { price: null, name: "New Option", menuId: restaurantId }
    };
    topping.items.push(option);
    topping.numchoices = topping.options.length;
    setSelectedMenuItem({
      ...selectedMenuItem
    });
    setSelectedMenuItemOptions([...selectedMenuItemOptions, option]);
  }

  function addToppings() {
    const option = {
      foodOptionName: "New Topping", 
      menuId: restaurantId, 
      optionName: "New Option",
      option: { price: null, name: "New Option", menuId: restaurantId }
    };

    const topping = {
      foodOptionName: "New Topping",
      menuId: restaurantId,
      menuItemName: selectedMenuItem.name,
      numchoices: 1,
      optionCat: {
        menuId: restaurantId,
        name: "New Topping",
        options: {
          items: [option]
        }
      }
    };
    selectedMenuItem.foodOptions.push(topping);
    setSelectedMenuItem({
      ...selectedMenuItem
    });
    setSelectedMenuItemToppings([...selectedMenuItemToppings, topping]);
    setSelectedMenuItemOptions([...selectedMenuItemOptions, option]);
  }

  async function addExistingToppings() {
    //change to some sort of get menu
    const existingToppingCategoriesResponse = await API.graphql(graphqlOperation(queries.listFoodOptions, { filter: { menuId: { eq: restaurantId }}}));
    const existingToppingCategories = existingToppingCategoriesResponse.data.listFoodOptions.items;
    setExistingToppings(existingToppingCategories);

    const option = {
      foodOptionName: "Old Topping", 
      menuId: restaurantId, 
      optionName: "Old Option",
      option: { price: null, name: "Old Option", menuId: restaurantId }
    };

    const topping = {
      foodOptionName: "Old Topping",
      menuId: restaurantId,
      menuItemName: selectedMenuItem.name,
      numchoices: 1,
      optionCat: {
        menuId: restaurantId,
        name: "Old Topping",
        options: {
          items: [option]
        }
      },
      existing: true,
    };

    setSelectedMenuItemExistingToppings([...selectedMenuItemExistingToppings, topping]);
    console.log("E", selectedMenuItemExistingToppings);
  }

  function editTopping(e, topping) {
    topping.foodOptionName = e.target.value;
    topping.optionCat.name = e.target.value;
    topping.options.forEach(option => option.foodOptionName = e.target.value);
    setSelectedMenuItemToppings([...selectedMenuItemToppings]);
    console.log("TPS", selectedMenuItemToppings);
    console.log("SMIT", selectedMenuItem);
  }

  function editExistingTopping(e, topping) {
    topping.foodOptionName = e.target.value;
    topping.optionCat.name = e.target.value;
    topping.options.forEach(option => option.foodOptionName = e.target.value);
    setSelectedMenuItemExistingToppings([...selectedMenuItemExistingToppings]);
    console.log("ETPS", selectedMenuItemExistingToppings);
    console.log("SMIET", selectedMenuItem);
  }

  function editOption(e, option) {
    option.optionName = e.target.value;
    option.option.name = e.target.value;
    //setSelectedMenuItemOptions([...selectedMenuItemOptions]);
    console.log("OPS", selectedMenuItemOptions);
    console.log("SMIO", selectedMenuItem);
  }

  function deleteTopping(topping) {
    const toppings = selectedMenuItemToppings.filter(t => t.foodOptionName != topping.foodOptionName);
    setSelectedMenuItemToppings(toppings);
    selectedMenuItem.foodOptions = selectedMenuItem.foodOptions.filter(t => t.foodOptionName != topping.foodOptionName);
    console.log("DTPS", selectedMenuItemToppings, toppings);
    console.log("DSMIT", selectedMenuItem);
  }

  useEffect(() => {
    console.log("select", selectedMenuItem)
  }, [selectedMenuItem]);

  console.log("render", menuItems)
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
                  <input className="text-input" type="text" placeholder="Enter Your Item Name" ref={itemNameInput} defaultValue={mode == "editItem" ? selectedMenuItem.name : ""} />
                </div>
                
                <div className="portal-menu-item-form-price-section">
                  <span className="subheading">Item Price ($)</span>
                  <input id="menu-item-price-input" className="text-input" type="text" placeholder="Enter Your Item Price" ref={itemPriceInput} defaultValue={mode == "editItem" ? selectedMenuItem.price.toFixed(2) : ""} />
                </div>
                
                <div className="portal-menu-item-form-description-section">
                  <span className="subheading">Item Description</span>
                  <textarea className="text-input" type="text" placeholder="Enter Your Item Description" ref={itemDescriptionInput} defaultValue={mode == "editItem" ? selectedMenuItem.description : ""} />
                </div>
                
                {/*<div className="portal-menu-item-form-tags-section">
                  <span className="subheading">Item Tags</span>
                  <input className="text-input" type="text" placeholder="Seafood" ref={itemTagsInput} />
                </div>
                
                <div className="portal-menu-item-form-image-section">
                  <span className="subheading">Upload Image</span>
                  <div className="image-input-wrapper">
                    <label htmlFor="portal-menu-item-form-image-input" className="image-upload">Upload an Image</label>
                    <input id="portal-menu-item-form-image-input" className="image-input" type="file" ref={itemImageInput} hidden />
                  </div>
                </div>*/}

                {mode == "editItem" && addItemType == "Customizable"  ? 
                  <div className="portal-menu-item-form-toppings-section">
                    {selectedMenuItem.foodOptions.concat(selectedMenuItemExistingToppings).map((topping =>
                      <div key={topping.id} className="portal-menu-item-form-toppings-container">
                        {topping.hasOwnProperty("existing") ? 
                          <div>
                            <span className="subheading">Toppings Name {/*<button className="red-x" type="button" onClick={() => deleteTopping(topping)}><img src={xButtonIcon} /></button>*/}</span>
                            <select className="dropdown-input" onChange={(e) => editExistingTopping(e, topping)}>
                              {existingToppings.filter(x => !selectedMenuItem.foodOptions.map(y => y.foodOptionName).includes(x.name)).map((existingTopping =>
                                <option key={existingTopping.name} value={existingTopping.name}>{existingTopping.name}</option>
                              ))}
                            </select>
                          </div>
                        :
                          <div>
                            <span className="subheading">Toppings Name {/*<button className="red-x" type="button" onClick={() => deleteTopping(topping)}><img src={xButtonIcon} /></button>*/}</span>
                            <input className="text-input" type="text" placeholder="Patty Type" onChange={(e) => editTopping(e, topping)} defaultValue={mode == "editItem" && selectedMenuItem.foodOptions.length > 0 ? topping.foodOptionName : ""}/>

                            <div className="portal-menu-item-form-toppings-options-container">
                              <span className="subheading">Options <button className="blue-plus" type="button" onClick={() => addOption(topping)}><img src={plusButtonIcon} /></button></span>
                              {topping.options((option => 
                                <div key={option.optionName} className="portal-menu-item-form-toppings-options-input-container">
                                  {/*<button className="red-x" type="button" onClick={() => deleteOption(option)}><img src={xButtonIcon} /></button>*/}
                                  <input className="text-input" type="text" placeholder="Crab Patty" onChange={(e) => editOption(e, option)} defaultValue={mode == "editItem" && topping.options.length > 0 ? option.optionName : ""}/>
                                </div>
                              ))}
                            </div>
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                : ""}
                {mode == "editItem" && addItemType == "Customizable"  ? 
                  <div>
                    <button id="add-category-button" className="blue-text" type="button" onClick={addToppings}><span>+</span> Add New Category</button><br />
                    {/*<button id="add-category-button" className="blue-text" type="button" onClick={addExistingToppings}><span>+</span> Add Existing Category</button>*/}
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
                  <button className="orange-text" onClick={() => {changeMode(""); setSelectedMenuItemToppings([]); setSelectedMenuItemOptions([]); setSelectedMenuItemExistingToppings([]); setSelectedMenuItem(defaultMenuItem); getData();}}>Cancel</button>
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
                {menuCategoriesList.map((category =>
                  <div key={category.name} className="menu-category-container">
                    <span className="blue-heading"><span>{category.name}</span><span><button className="blue-plus" onClick={() => {selectCategory(category); setSelectedMenuItem(defaultMenuItem); changeMode("addItem")}}><img src={plusButtonIcon} /></button></span></span>

                    {category.menuItems.map(item => 
                      <div key={item.name} className={selectedMenuItem == item ? "menu-item-container active" : "menu-item-container"} onClick={() => {setSelectedMenuItem(item)}}>
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
                      <div>
                        <span className="subheading">Toppings</span>
                        {(selectedMenuItem.foodOptions || []).map((topping =>
                          <div key={topping.name} className="menu-item-description"><b>{topping.name}:</b> {topping.options.map(option => option.name).join(", ")}</div>
                        ))}
                      </div>
                    <button className="orange" onClick={() => {changeMode("editItem"); setAddItemType(selectedMenuItem.foodOptions.length > 0 ? "Customizable" : "Regular")}}>Edit Menu Item</button>
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
                    <input className="text-input" type="text" placeholder="Enter Category Name" ref={categoryNameInput} />
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
                    <input className="text-input" type="text" placeholder="Enter Category Name" ref={categoryNameInput} />
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
