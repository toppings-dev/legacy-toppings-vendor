import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

import bubbleIcon from '../assets/images/bubble-icon-2.svg';

function PortalRewards(props) {
  const nameInput = useRef();
  const pointsInput = useRef();
  const descriptionInput = useRef();

  const [mode, changeMode] = useState("");
  const [selectedRewardItem, selectRewardItem] = useState(null);
  const [rewardItems, setRewardItems] = useState({
    // Rewards: [{id: 1, name: "Jelly Joy", price: 5, description: "10% discount on all jelly patties."}, 
    //           {id: 2, name: "Krabby Patty Happy Hour", price: 5, description: "10% discount on all Krabby Patties between 12PM and 3PM."},
    //           {id: 3, name: "Seanut Superstar", price: 10, description: "Buy one get one free Seanut Brittle."},]
    Rewards: []
  });

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    API.graphql({ query: queries.listVendorRewards }).then(({ data: { listVendorRewards } }) => {
      let restaurantRewards = listVendorRewards.items.filter(reward => reward.menuId == props.restaurant.id);
      restaurantRewards.forEach(reward => {
        API.graphql({ query: queries.listMenuItems }).then(({ data: { listMenuItems } }) => {
          console.log(listMenuItems)
          let restaurantMenuItem = listMenuItems.items.filter(item => item.menuId == props.restaurant.id && item.name == reward.itemName);
          setRewardItems({
            Rewards: [...rewardItems.Rewards, {
              ...reward,
              description: restaurantMenuItem[0].description
            }]
          });
        }).catch((error) => {
          console.log(error);
        });
      });
      console.log(restaurantRewards)
      setRewardItems({
        Rewards: restaurantRewards
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  function addReward() {
    const reward = {
      itemName: nameInput.current.value,
      menuId: props.restaurant.id,
      points: parseInt(pointsInput.current.value),
      date_active_from: null,
      date_active_to: null,
      discountAmount: null,
      discountPercentage: null,
      // description: descriptionInput.current.value,
    };

    API.graphql({ query: mutations.createVendorReward, variables: { input: reward } }).then(({ data: { createVendorReward } }) => {
      console.log("Create Reward", createVendorReward);
      changeMode("");
      getData();
    }).catch((error) => {
      console.log(error);
    });
  }

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
                <input className="text-input" type="text" placeholder="Krabby Patty Happy Hour" ref={nameInput} />
              </div>
              
              <div className="portal-rewards-form-points-section">
                <span className="subheading">Point Value</span>
                <input className="text-input" type="number" placeholder="5" ref={pointsInput} />
              </div>
              
              <div className="portal-rewards-form-description-section">
                <span className="subheading">Reward Description</span>
                <textarea className="text-input" type="text" placeholder="10% discount on all Krabby Patties between 12PM and 3PM." ref={descriptionInput} />
              </div>
            </form>
            
            <div className="portal-rewards-form-submit-section">
              <div>
                <button className="red-text">Delete</button>
              </div>
              <div>
                <button className="orange-text" onClick={() => changeMode("")}>Cancel</button>
                <button className="orange" onClick={() => addReward()}>Add Reward</button>
              </div>
            </div>
          </div>
        </div>
      : rewardItems.Rewards.length > 0 ? 
        <div className="portal-rewards-list-container">
          <header>
            <span className="orange-heading">Active Rewards</span>
          </header>

          <div className="content">
            <div className="portal-rewards-list">
              {Object.keys(rewardItems).map((category =>
                <div className="rewards-category-container" key={category.id}>
                  <span className="blue-heading"></span>

                  {rewardItems[category].map(item => 
                    <div key={item.id} className={selectedRewardItem == item ? "reward-container active" : "reward-container"} onClick={() => selectRewardItem(item)}>
                      <span className="subheading">{item.itemName}</span>
                      <span className="subheading">{item.points} points</span>
                      <div className="reward-description">{item.description}</div>
                    </div>
                  )}
                </div> 
              ))} 
            </div>
            <div className="portal-rewards-view">
              {selectedRewardItem != null ? 
              <div>
                <span className="orange-heading">{selectedRewardItem.itemName}</span>
                <span className="blue-heading">{selectedRewardItem.points} points</span>
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
