import React, { useState, useEffect, useRef } from 'react';

import bubbleIcon from '../assets/images/bubble-icon-2.svg';

function PortalRewards(props) {
  const addRewardName = useRef();

  const [mode, changeMode] = useState("");
  const [selectedRewardItem, selectRewardItem] = useState(null);
  const [rewardItems, setRewardItems] = useState({
    Rewards: [{id: 1, name: "Jelly Joy", price: 5, description: "10% discount on all jelly patties."}, 
              {id: 2, name: "Krabby Patty Happy Hour", price: 5, description: "10% discount on all Krabby Patties between 12PM and 3PM."},
              {id: 3, name: "Seanut Superstar", price: 10, description: "Buy one get one free Seanut Brittle."},]
  });

  // useEffect(() => {
  //   const menu = {
  //     name: "Papaya",
  //     menuId: "1"
  //   };

  //   API.graphql({ query: queries.listMenuCategorys/*, variables: { input: menu }*/ }).then(({ data: { listMenuCategorys } }) => {
  //     console.log(listMenuCategorys);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  // function getData() {

  // }  

  return (
    <article className="portal-rewards-container">
      {mode == "addReward" ? 
        <div className="portal-rewards-form-container">
          <header>
            <span className="orange-heading">New Reward</span>
          </header>

          <div className="content">
            <form className="portal-rewards-form">
              <div className="portal-rewards-form-name-section">
                <span className="subheading">Reward Name</span>
                <input className="text-input" type="text" placeholder="Krabby Patty Happy Hour" ref={addRewardName} />
              </div>
              
              <div className="portal-rewards-form-points-section">
                <span className="subheading">Point Value</span>
                <input className="text-input" type="text" placeholder="5" ref={addRewardName} />
              </div>
              
              <div className="portal-rewards-form-description-section">
                <span className="subheading">Reward Description</span>
                <textarea className="text-input" type="text" placeholder="10% discount on all Krabby Patties between 12PM and 3PM." ref={addRewardName} />
              </div>
            </form>
            
            <div className="portal-rewards-form-submit-section">
              <div>
                <button className="red-text">Delete</button>
              </div>
              <div>
                <button className="orange-text" onClick={() => changeMode("")}>Cancel</button>
                <button className="orange">Add Reward</button>
              </div>
            </div>
          </div>
        </div>
      : Object.keys(rewardItems).length > 0 ? 
        <div className="portal-rewards-list-container">
          <header>
            <span className="orange-heading">Active Rewards</span>
          </header>

          <div className="content">
            <div className="portal-rewards-list">
              {Object.keys(rewardItems).map((category =>
                <div className="rewards-category-container">
                  <span className="blue-heading"></span>

                  {rewardItems[category].map(item => 
                    <div key={item.id} className={selectedRewardItem == item ? "reward-container active" : "reward-container"} onClick={() => selectRewardItem(item)}>
                      <span className="subheading">{item.name}</span>
                      <span className="subheading">{item.price} points</span>
                      <div className="reward-description">{item.description}</div>
                    </div>
                  )}
                </div> 
              ))} 
            </div>
            <div className="portal-rewards-view">
              {selectedRewardItem != null ? 
              <div>
                <span className="orange-heading">{selectedRewardItem.name}</span>
                <span className="blue-heading">{selectedRewardItem.price} points</span>
                <span className="subheading">Description</span>
                <div className="rewards-item-description">{selectedRewardItem.description}</div>
                <button className="orange" onClick={() => changeMode("addReward")}>Edit Reward</button>
              </div>
              : ""}
            </div>
            <div className="portal-rewards-view-buttons">
              <button className="orange" onClick={() => changeMode("addReward")}>Add Reward</button>
            </div>
          </div>
        </div>
      :
        <div>
          <header>
            <img className="portal-empty-image" src={bubbleIcon} />
            <span className="subheading">You have no active rewards.</span>
            <b>Get users excited by adding <br /> reward opportunities!</b>
          </header>

          <div className="content">
            <button>Add Reward</button>
          </div>
        </div>
      }
    </article>
  );
}

export default PortalRewards;
