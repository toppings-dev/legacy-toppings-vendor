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

import { gql, useMutation } from '@apollo/client';

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
  const [toppingPopup, setToppingPopup] = useState(false);
  const [addItemType, setAddItemType] = useState("Regular");
  const [selectedTopping, setSelectedTopping] = useState([]);
  const [lastSelectedTopping, setLastSelectedTopping] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(defaultMenuItem);
  const [selectedMenuItemToppings, setSelectedMenuItemToppings] = useState([]);
  const [selectedMenuItemOptions, setSelectedMenuItemOptions] = useState([]);
  const [selectedMenuItemExistingToppings, setSelectedMenuItemExistingToppings] = useState([]);
  const [existingToppings, setExistingToppings] = useState([]);
  const [removableToppings, setRemoveableToppings] = useState([]);
  const [removableOptions, setRemoveableOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hasMenu, setHasMenu] = useState(false);
  const [toppingOptions, setToppingOptions] = useState([]);
  const [toppingCategories, setToppingCategories] = useState([]);
  // const [menuItems, setMenuItems] = useState({
  //   Appetizers: [{id: 1, name: "Golden Loaf", price: "2.50", description: "A loaf that is golden."}, 
  //                  {id: 2, name: "Fried Oyster Skins", price: "0.99", description: "Oyster skins that are fried."}],
  //   Entrees: [{id: 3, name: "Krabby Patty", price: "2.99", description: "The signature of the Krusty Krab, a juicy burger with secret ingredients."}, 
  //               {id: 4, name: "Jelly Patty", price: "3.99", description: "A Krabby Patty with jellyfish jelly."}],
  //   Desserts: [{id: 5, name: "Seanut Brittle", price: "2.43", description: "Hard sugar candy pieces with seanuts inside."}]
  // });
  const [menuItems, setMenuItems] = useState({});
  const [menuCategoriesList, setMenuCategoriesList] = useState({});
  const [toppings, setToppings] = useState({});
  const [toppingCategoryName, setToppingCategoryName] = useState();
  
  const [updateRestaurant, {data: restaurantData, error: mutationError, loading: mutationLoading }] = useMutation(customMutations.updateRestaurant);

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

  function toggleToppingPopup() {
    setToppingPopup(!toppingPopup);
  }
  function addCategory(e) {
    console.log("add category", categoryNameInput.current.value);
    e.preventDefault();
    
    let categoryClone = JSON.parse(JSON.stringify(menuCategoriesList));
    categoryClone = [
      ...menuCategoriesList,
      {
        name: categoryNameInput.current.value,
        menuItems: [],
        __typename: "MenuCategory",
      }
    ]

    setMenuCategoriesList(categoryClone);
    console.log("category clone", categoryClone)
    
    changeMode("")
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

    const categoryListClone = JSON.parse(JSON.stringify(menuCategoriesList));
    const selectedCategoryIndex = menuCategoriesList.findIndex(category => category === selectedCategory);
    const itemsInput = [
      ...selectedCategory.menuItems,
      {
        __typename: 'MenuItem',
        name: itemNameInput.current.value,
        description: itemDescriptionInput.current.value,
        price: itemPriceInput.current.value,
        foodOptions: [],
      },    
    ]
    categoryListClone[selectedCategoryIndex].menuItems = itemsInput;
    setMenuCategoriesList(categoryListClone);
    console.log("category list clone", categoryListClone);
    
    const updatedRestaurant = {
      id: restaurantId,
      input: { 
        menu: JSON.stringify(categoryListClone),
      },
    };

    const updateRestaurantResponse = await updateRestaurant({variables: updatedRestaurant});

    console.log("props", props);
    console.log("mutation response", updateRestaurantResponse);
    setMenuItems({});
    getData();
    changeMode("");
    setSelectedMenuItem(defaultMenuItem);
  }

  async function editItem(e) {
    e.preventDefault();
    console.log("sleepy", toppings);
    // if (selectedTopping !== []) {
    //   toppings[lastSelectedTopping.name] = selectedTopping;
    // }
    delete toppings[undefined];

    const arrayToppings = Object.keys(toppings).map(function(key) {
      return ({
        __typename: 'FoodOptions',
        name: key,
        numChoices: toppings[key].numChoices,
        options: toppings[key].options,
      })
    })
    console.log("idk dude", arrayToppings);

    const categoryListClone = JSON.parse(JSON.stringify(menuCategoriesList));
    const selectedCategoryIndex = menuCategoriesList.findIndex(category => category === selectedCategory);
    const selectedItemIndex = menuCategoriesList[selectedCategoryIndex].menuItems.findIndex(item => item === selectedMenuItem);

    categoryListClone[selectedCategoryIndex].menuItems[selectedItemIndex] = {
      __typeName: 'MenuItem',
      name: itemNameInput.current.value,
      description: itemDescriptionInput.current.value,
      price: itemPriceInput.current.value,
      points: null,
      foodOptions: arrayToppings,
    }
    console.log("more specific", categoryListClone[selectedCategoryIndex].menuItems[selectedItemIndex])
    console.log("restaurant input", categoryListClone);

    const updatedRestaurant = {
      id: restaurantId,
      input: { 
        menu: JSON.stringify(categoryListClone),
      },
    };

    const updateRestaurantResponse = await updateRestaurant({variables: updatedRestaurant});
    console.log("mutation response", updateRestaurantResponse);

    setMenuItems({});
    getData();
    changeMode("");
    setToppings({});
    setSelectedMenuItem(defaultMenuItem);
  }
  
  async function deleteItem(e) {
    e.preventDefault();
    
    const categoryListClone = JSON.parse(JSON.stringify(menuCategoriesList));
    const selectedCategoryIndex = menuCategoriesList.findIndex(category => category === selectedCategory);
    let itemsInput = [
      ...selectedCategory.menuItems,    
    ]
    itemsInput = itemsInput.filter(item => item != selectedMenuItem);

    categoryListClone[selectedCategoryIndex].menuItems = itemsInput;
    setMenuCategoriesList(categoryListClone);
    console.log("category list clone", categoryListClone);
    
    const updatedRestaurant = {
      id: restaurantId,
      input: { 
        menu: JSON.stringify(categoryListClone),
      },
    };

    console.log("additem", updatedRestaurant)
    const updateRestaurantResponse = await updateRestaurant({variables: updatedRestaurant});

    setToppings({});
  }

  function addOption() {
    let toppingCopy = JSON.parse(JSON.stringify(selectedTopping));
    toppingCopy.options = [
      ...toppingCopy.options,
      {
        __typename: 'Option',
        name: '',
        price: null,
        points: null,
      },
    ]
    setSelectedTopping(toppingCopy);
    setToppingOptions(toppingCopy.options);
    console.log("add option", toppingCopy);
  }

  function addToppings() {
    const itemClone = JSON.parse(JSON.stringify(selectedMenuItem));
    console.log("itemcopy", itemClone)
    itemClone.foodOptions = [
      ...selectedMenuItem.foodOptions,
      {
        name: toppingCategoryName,
        options: [],
        __typename: "FoodOption",
      }
    ]
    toppings[toppingCategoryName] = 
    {
      name: toppingCategoryName,
      options: [],
      __typename: "FoodOption",
    };
    setSelectedMenuItem(itemClone);
    setToppingCategories(itemClone.foodOptions);
    console.log("add category", itemClone);

    toggleToppingPopup();
  }
  
  function deleteToppings() {
    //bookmark
    //.filter is not a function, .findIndex is not a function, can't fully delete toppings[selectedTopping.name] 
    // const itemClone = JSON.parse(JSON.stringify(selectedMenuItem));
    // itemClone.foodOptions = itemClone.foodOptions.filter((cat) => cat.name !== selectedTopping.name);
    // console.log("delete toppings", itemClone);

    // const toppingsClone = JSON.parse(JSON.stringify(toppings))
    
    // delete toppings[selectedTopping.name];
    // setSelectedTopping([])
    // setSelectedMenuItem(itemClone);
    // setToppingOptions([])
    // console.log("ugh", toppings);
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

  function editToppingName(e, topping) {
    let toppingsClone = Object.assign({}, toppings);
    // toppingsClone[e.target.value] = toppingsClone[topping.name];
    console.log("toppings Clone", topping.name);

    topping.name = e.target.value;
  }

  function editExistingTopping(e, topping) {
    topping.foodOptionName = e.target.value;
    topping.optionCat.name = e.target.value;
    topping.options.forEach(option => option.foodOptionName = e.target.value);
    setSelectedMenuItemExistingToppings([...selectedMenuItemExistingToppings]);
    console.log("ETPS", selectedMenuItemExistingToppings);
    console.log("SMIET", selectedMenuItem);
  }

  function editOption(e, index) {
    let toppingClone = JSON.parse(JSON.stringify(selectedTopping))
    toppingClone.options[index].name = e.target.value;
    console.log("edit option", toppingClone);
    setSelectedTopping(toppingClone);
  }
  function deleteOption(index) {
    let toppingCopy = JSON.parse(JSON.stringify(selectedTopping));
    console.log("copy", toppingCopy.options[index].name, toppingCopy);

    toppingCopy.options = toppingCopy.options.filter((opt) => opt.name !== toppingCopy.options[index].name,);
    setSelectedTopping(toppingCopy);
    setToppingOptions(toppingCopy.options);
    console.log("delete option", toppingCopy);
  }

  function deleteTopping(topping) {
    const toppings = selectedMenuItemToppings.filter(t => t.foodOptionName != topping.foodOptionName);
    setSelectedMenuItemToppings(toppings);
    selectedMenuItem.foodOptions = selectedMenuItem.foodOptions.filter(t => t.foodOptionName != topping.foodOptionName);
    console.log("DTPS", selectedMenuItemToppings, toppings);
    console.log("DSMIT", selectedMenuItem);
  }

  function handleSelectTopping(event) {
    console.log("handle select topping");
    if (lastSelectedTopping !== []) {
      toppings[lastSelectedTopping.name] = selectedTopping
      console.log("global array change", selectedTopping)
    };
    setSelectedTopping(toppings[event.target.value]);
    setToppingOptions(toppings[event.target.value].options);
    
    setLastSelectedTopping(toppings[event.target.value]);
  }

  function prepareEdit() {
    let a = {}
    const categoryNames = selectedMenuItem.foodOptions.map((foodOption)=>foodOption.name);
    categoryNames.forEach((categoryName) => {
      a[categoryName] = selectedMenuItem.foodOptions.find((item)=> item.name === categoryName)
    })
    console.log("toppings", a);
    setToppingCategories(selectedMenuItem.foodOptions);
    setToppings(a);
  }

  useEffect(() => {
    console.log("select item", selectedMenuItem)
  }, [selectedMenuItem]);
  useEffect(() => {
    console.log("select topping", selectedTopping)
  }, [selectedTopping]);

  console.log("render", menuItems, selectedTopping)
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
                    <div className="portal-menu-item-form-toppings-container">
                      <div>
                        <span className="subheading">Topping Categories</span>
                        <select name="topping-categories" className="dropdown-input" style={{width: "30%"}}id="topping-category" onChange={(e) => handleSelectTopping(e)}>
                          <option value="none" selected disabled hidden> Select an Option </option>
                          {(selectedMenuItem.foodOptions || []).map((topping =>
                            <option key={topping.name} value={topping.name}>{topping.name}</option>
                          ))}
                        </select>
                        <button className="red-x" type="button" onClick={() => deleteToppings()}><img src={xButtonIcon} /></button>
                        <span className="subheading">Toppings Options</span>
                        {
                        (toppingOptions || []).map(((option, index) => 
                            <div key={option.name} className="portal-menu-item-form-toppings-options-input-container">
                              <input className="text-input" style={{width: "30%"}} type="text" placeholder="Enter Option" onChange={(e) => editOption(e, index)} defaultValue={option.name}/>
                              <button className="red-x" type="button" onClick={() => deleteOption(index)}><img src={xButtonIcon} /></button>
                            </div>
                          ))}
                          <button id="add-category-button" className="blue-text" type="button" onClick={addOption}><span>+</span> Add New Topping Option</button><br />
                      </div>
                    </div>
                  </div>
                : ""}
                {mode == "editItem" && addItemType == "Customizable"  ? 
                <div>
                  <div>
                    <button id="add-category-button" className="blue-text" type="button" onClick={() => toggleToppingPopup()}><span>+</span> Add New Category</button><br />
                    {/*<button id="add-category-button" className="blue-text" type="button" onClick={addExistingToppings}><span>+</span> Add Existing Category</button>*/}
                  </div>
                  <div>
                    {toppingPopup ?
                      <div className="portal-category-form-container">
                        <button className="close" onClick={() => toggleToppingPopup()}>&#10005;</button>
                        <span className="subheading">Topping Category Name</span>
                        <form className="portal-category-form">
                            <input className="text-input" type="text" placeholder="Enter Category Name" value={toppingCategoryName} onChange={(e) => setToppingCategoryName(e.target.value)} />
                            <button onClick={addToppings}>Create Category</button>
                        </form>
                      </div>
                    : ""}
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
                  <button className="orange-text" onClick={() => {changeMode(""); setSelectedMenuItemToppings([]); setSelectedMenuItemOptions([]); setSelectedMenuItemExistingToppings([]); setSelectedMenuItem(defaultMenuItem); setSelectedCategory([]); setToppings({}); getData();}}>Cancel</button>
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
                    <span className="blue-heading"><span>{category.name}</span><span><button className="blue-plus" onClick={() => {setSelectedCategory(category); setSelectedMenuItem(defaultMenuItem); changeMode("addItem")}}><img src={plusButtonIcon} /></button></span></span>

                    {category.menuItems.map(item => 
                      <div key={item.name} className={selectedMenuItem == item ? "menu-item-container active" : "menu-item-container"} onClick={() => {setSelectedMenuItem(item); setSelectedCategory(category)}}>
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
                    <button className="orange" onClick={() => {prepareEdit(); changeMode("editItem"); setAddItemType(selectedMenuItem.foodOptions.length > 0 ? "Customizable" : "Regular")}}>Edit Menu Item</button>
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
                    <button type="submit" onClick={addCategory}>Create Category</button>
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
                    <button type="submit" onClick={addCategory}>Create Category</button>
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
