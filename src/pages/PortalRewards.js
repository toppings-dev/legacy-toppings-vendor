import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

import bubbleIcon from '../assets/images/bubble-icon-2.svg';
import loadingBubbleIcon from '../assets/images/bubble-icon-1.svg';

function PortalRewards(props) {
  const defaultReward = {
    name: "Jelly Joy", 
    points: 5, 
    description: "10% discount on all jelly patties"
  };
  const nameInput = useRef();
  const pointsInput = useRef();
  const descriptionInput = useRef();

  const [mode, changeMode] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRewardItem, selectRewardItem] = useState(defaultReward);
  const [rewardItems, setRewardItems] = useState({
    // Rewards: [{id: 1, name: "Jelly Joy", price: 5, description: "10% discount on all jelly patties."}, 
    //           {id: 2, name: "Krabby Patty Happy Hour", price: 5, description: "10% discount on all Krabby Patties between 12PM and 3PM."},
    //           {id: 3, name: "Seanut Superstar", price: 10, description: "Buy one get one free Seanut Brittle."},]
    Rewards: []
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    // API.graphql(graphqlOperation(queries.listVendorRewards, { filter: { menuId: { eq: props.restaurant.id } } })).then(({ data: { listVendorRewards } }) => {
    //   setRewardItems({
    //     Rewards: listVendorRewards.items
    //   });
    // }).catch((error) => {
    //   console.log(error);
    // });
    setLoading(true);
    const response = await API.graphql(graphqlOperation(queries.listVendorRewards, { filter: { menuId: { eq: props.restaurant.id }}}));
    console.log(response);
    const rewards = response.data.listVendorRewards.items.sort((reward1, reward2) => (reward1.points > reward2. points ? 1 : -1));
    console.log(rewards);
    setRewardItems({
      Rewards: rewards
    });
    setLoading(false);
  }

  async function addReward() {
    const reward = {
      itemName: nameInput.current.value,
      menuId: props.restaurant.id,
      points: parseInt(pointsInput.current.value),
      date_active_from: null,
      date_active_to: null,
      discountAmount: null,
      discountPercentage: null,
      description: descriptionInput.current.value,
    };

    const response = await API.graphql(graphqlOperation(mutations.createVendorReward, { input: reward }));
    const newReward = response.data.createVendorReward;
    console.log(newReward);
    changeMode("");
    getData();
    selectRewardItem(defaultReward);
  }

  async function editReward() {
    const reward = {
      id: selectedRewardItem.id,
      itemName: nameInput.current.value,
      menuId: props.restaurant.id,
      points: parseInt(pointsInput.current.value),
      description: descriptionInput.current.value,
    };

    const response = await API.graphql(graphqlOperation(mutations.updateVendorReward, { input: reward }));
    changeMode("");
    getData();
    selectRewardItem(defaultReward);
  }

  async function deleteReward() {
    const reward = {
      id: selectedRewardItem.id,
    }

    const response = await API.graphql(graphqlOperation(mutations.deleteVendorReward, { input: reward }));
    changeMode("");
    getData();
    selectRewardItem(defaultReward);
  }

  return (
    <article className="portal-rewards-container">
      {loading ? 
        <div>
          <header>
            <img className="portal-empty-image" src={loadingBubbleIcon} />
            <span className="subheading">Loading...</span>
          </header>
        </div>  
      :
        <div>
          {mode == "addReward" || mode == "editReward" ? 
            <div className="portal-rewards-form-container">
              <header>
                <span className="orange-heading">New Reward</span>
              </header>

              <div className="content">
                <form className="portal-rewards-form">
                  <div className="portal-rewards-form-name-section">
                    <span className="subheading">Reward Name</span>
                    <input className="text-input" type="text" placeholder="Enter Your Reward Name" ref={nameInput} defaultValue={mode == "editReward" ? selectedRewardItem.itemName : ""}/>
                  </div>
                  
                  <div className="portal-rewards-form-points-section">
                    <span className="subheading">Point Value</span>
                    <input className="text-input" type="number" placeholder="Enter Your Reward Point Value" ref={pointsInput} defaultValue={mode == "editReward" ? selectedRewardItem.points : ""}/>
                  </div>
                  
                  <div className="portal-rewards-form-description-section">
                    <span className="subheading">Reward Description</span>
                    <textarea className="text-input" type="text" placeholder="Enter Your Reward Description" ref={descriptionInput} defaultValue={mode == "editReward" ? selectedRewardItem.description : ""}/>
                  </div>
                </form>
                
                <div className="portal-rewards-form-submit-section">
                  <div>
                    {mode == "editReward" ? 
                      <button className="red-text" onClick={deleteReward}>Delete</button>
                    : ""}
                  </div>
                  <div>
                    <button className="orange-text" onClick={() => changeMode("")}>Cancel</button>
                    <button className="orange" onClick={mode == "addReward" ? addReward : editReward}>{mode == "addReward" ? "Add" : "Save"} Reward</button>
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
                          <span className="subheading">{item.points} pts</span>
                          <div className="reward-description">{item.description}</div>
                        </div>
                      )}
                    </div> 
                  ))} 
                </div>
                <div className="portal-rewards-view">
                  {selectedRewardItem != null && selectedRewardItem.name != defaultReward.name ? 
                  <div>
                    <span className="orange-heading">{selectedRewardItem.itemName}</span>
                    <span className="blue-heading">{selectedRewardItem.points} points</span>
                    <span className="subheading">Description</span>
                    <div className="rewards-item-description">{selectedRewardItem.description}</div>
                    <button className="orange" onClick={() => changeMode("editReward")}>Edit Reward</button>
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
                <button onClick={() => changeMode("addReward")}>Add Reward</button>
              </div>
            </div>
          }
        </div>
      }
    </article>
  );
}

export default PortalRewards;
