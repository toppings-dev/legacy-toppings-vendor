import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import useInterval from '../utils/useInterval';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions'
import * as customQueries from '../graphql/customQueries';
import * as customMutations from '../graphql/customMutations';
import * as customSubscription from '../graphql/customSubscriptions';

import loadingBubbleIcon from '../assets/images/bubble-icon-1.svg';
import bubbleIcon from '../assets/images/bubble-icon-2.svg';
import whiteCheckmark from '../assets/images/white-checkmark.svg';
import grayCheckmark from '../assets/images/gray-checkmark.svg';
import ding from '../assets/audio/ding.mp3';
import { ConsoleLogger } from '@aws-amplify/core';
import { useQuery, useMutation } from '@apollo/client';
import { getCurrentUser } from '../utils/session';
import PartyContainer from '../components/PartyContainer';

dayjs().format();

function PortalOrders(props) {
  const { restaurant } = props;
  console.log('🤬');

  const currentUser = getCurrentUser();
  console.log(currentUser);

  const newOrderTimeStamp = 30;
  const preparingOrderTimeStamp = 15;
  const readyOrderTimeStamp = 5;
  const deliveredOrderTimeStamp = 0;
  const cancelledOrderTimeStamp = -1;
  const dingTimer = 5000;
  const orderTimes = [10, 15, 20, 25, 30, 45, 60, 75];

  const audio = new Audio(ding);
  const [loading, setLoading] = useState(false);
  //const [audio] = useState(new Audio(ding));
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedRun, setSelectedRun] = useState(null);
  const [receivingOrders, setReceivingOrders] = useState(true);
  const [hasNew, setHasNew] = useState(false);

  let timerId;

  const itemNameWithOptions = item => {
    let ret = `${item.name}`;
    if (item.foodOptions) {
      let allOptions = [];
      item.foodOptions.map(foodOption => {
        foodOption.options.map(option => allOptions.push(option.name));
      });
      ret += allOptions.sort().join(',');
    }
    return ret;
  };
  const assembleSelectedRun = party => {
    let allOrderItems = [];
    let totalTax = 0;
    let totalTip = 0;
    let totalTotal = 0;
    party.orders.map(order => {
      order.items.map(item => {
        let itemIndex = allOrderItems.findIndex(orderItem => itemNameWithOptions(orderItem) === itemNameWithOptions(item));
        if (itemIndex === -1) {
          allOrderItems.push(item);
        } else {
          allOrderItems[itemIndex].quantity += item.quantity;
        }
      });
      totalTax += order.tax;
      totalTip += order.tip;
      totalTotal += order.totalPrice;
    });
    setSelectedRun({
      ...party,
      orderItems: allOrderItems,
      totalTax,
      totalTip,
      totalTotal,
    });
  };

  let { data: partiesData, loading: partiesLoading, error: partiesError } = useQuery(customQueries.LIST_PARTIES_BY_RESTAURANT, {
    variables: {
      restaurantId: restaurant?.id,
    },
    skip: !(restaurant?.id),
    pollInterval: 60 * 1000,
  });
  let { data: allPartiesData, loading: allPartiesLoading, error: allPartiesError } = useQuery(customQueries.LIST_IN_PROGRESS_PARTIES, {
    skip: currentUser.username !== 'all@gmail.com',
    pollInterval: 60 * 1000,
  });

  let [updatePartyETA, { error: updatePartyError }] = useMutation(customMutations.UPDATE_PARTY_ETA, {
    onCompleted(data) {
      let newParty = JSON.parse(JSON.stringify(data.updatePartyETA));
      let oldParty = JSON.parse(JSON.stringify(selectedRun));
      
      if (selectedRun?.id === newParty.id) {
        console.log({
          ...oldParty,
          ...newParty,
        });
        setSelectedRun({
          ...oldParty,
          ...newParty,
        });
      }
    },
  });

  const handleUpdatePartyETA = selectedMinutes => {
    updatePartyETA({ 
      variables: { partyId: selectedRun.id, partyFinishedPreparingMinutes: selectedMinutes },
    });
  };

  let parties = [];
  let hasUnviewed = false;

  if (partiesData?.listPartiesByRestaurant || allPartiesData?.listInProgressParties) {
    parties = partiesData?.listPartiesByRestaurant;
    if (allPartiesData?.listInProgressParties) {
      parties = allPartiesData.listInProgressParties;
    }
    console.log(parties);

    hasUnviewed = false;

    for (const party of parties) {
      if (!party.restaurantFinishedPreparingMinutes) {
        hasUnviewed = true;
        break;
      }
    }
  }

  useInterval(() => {
    audio.play();
  }, hasUnviewed ? dingTimer : null);

  return (
    <article className="portal-orders-container">
    {partiesLoading ? 
      <div>
        <header>
          <img className="portal-empty-image" src={loadingBubbleIcon} />
          <span className="subheading">Loading...</span>
        </header>
      </div>  
    :
      <div>
        {parties.length > 0 ?
          <div className="portal-orders-subcontainer">
            <div className="orders-list">
              <div>
                {parties.map((party) => 
                  <PartyContainer 
                    key={party.id}
                    party={party}
                    selectedOrder={selectedOrder}
                    setSelectedOrder={setSelectedOrder}
                    selectedRun={selectedRun}
                    setSelectedRun={setSelectedRun}
                    assembleSelectedRun={assembleSelectedRun}
                    isAll={currentUser.username === 'all@gmail.com'}
                  />
                )}
              </div>
              {/* <div>
                
                <div className="order-category-container">
                  {Object.keys(orders).map((category =>
                    <div key={category}>
                      {orders[category].length > 0 &&
                        orders[category].sort((order1, order2) => (order1.time.split(" ")[1] + order1.time.split(" ")[0] > order2.time.split(" ")[1] + order2.time.split(" ")[0] ? 1 : -1)).map(order => 
                          <div key={order.id} className={selectedOrder == order ? "order-container active" : "order-container"} onClick={() => {selectOrder(order); console.log(order)}}>
                            <span>#{order.id.slice(0, 5)}...</span> 
                            <span>{category == "New" ? <button>New</button> : ""}</span>
                          </div>
                        )
                      }
                    </div>
                  ))}
                </div>
              </div>*/}
            </div>
            {(!selectedOrder && !selectedRun) && (
            <div className='selected-order-container'>
              <p className='click-order-text'>
                Click on a group to view all orders in the group<br />
                OR<br />
                Click on an order in a group to view that order
              </p>
            </div>
            )}
            {selectedRun && (
              <div className="selected-order-container">
                <div className="split-row">
                  <span className="orderer-name">
                    {selectedRun.deliverer.name}'s Group {currentUser.username === 'all@gmail.com' ? `at ${selectedRun.restaurant.name}` : ''}
                  </span>
                  <span className="order-date">
                    {dayjs(selectedRun.orders[0].orderSentTime).format('MM/DD/YY hh:mmA')}
                  </span>
                </div>

                <hr className="divider" />

                {selectedRun.orderItems.map(item => (
                  <div className="split-row" key={item.id}>
                    <div className="item-container">
                      <span className="item-name">
                        {item.quantity > 1 && `${item.quantity}x `}
                        {item.menuItem.name}
                      </span>
                      {item.foodOptions.map(foodOption => (
                        foodOption.options.map(option => <span className="item-option-name">{option.name}</span>)
                      ))}
                    </div>
                    <span className="item-price">
                      {(item.quantity * item.price / 100).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className='split-row'>
                  <span className='item-name-gray'>
                    Tax
                  </span>
                  <span className='item-price-gray'>
                    {(selectedRun.totalTax / 100).toFixed(2)}
                  </span>
                </div>
                <div className='split-row'>
                  <span className='item-name-gray'>
                    Tip
                  </span>
                  <span className='item-price-gray'>
                    {(selectedRun.totalTip / 100).toFixed(2)}
                  </span>
                </div>
                <div className='split-row'>
                  <span className='item-name'>
                    Total
                  </span>
                  <span className='item-price'>
                    ${(selectedRun.totalTotal / 100).toFixed(2)}
                  </span>
                </div>


                <hr className='divider' />
                
                <span className='item-name-left'>
                  Order Time (min)
                </span>
                <span className='item-name-left-small'>
                  Click a button to select
                </span>

                {selectedRun.restaurantFinishedPreparingMinutes ? (
                  <span className='item-name-center-big'>
                    You have selected {selectedRun.restaurantFinishedPreparingMinutes} minutes.
                  </span>
                ) : (
                  <div className='time-container'>
                    {orderTimes.map((orderTime, index) =>
                      <div 
                        className={index === 0 || index === 7 ? (index === 0 ? 'left' : 'right') : undefined}
                        onClick={() => handleUpdatePartyETA(orderTime)}
                        key={orderTime}
                      >
                        <span>
                          {orderTime}
                        </span>
                      </div>  
                    )}
                  </div>
                )}
              </div>
            )}
            {selectedOrder && (
              <div className="selected-order-container">
                <div className="split-row">
                  <span className="orderer-name">
                    {selectedOrder.customer.name}  {currentUser.username === 'all@gmail.com' ? `at ${selectedOrder.restaurant.name}` : ''}
                  </span>
                  <span className="order-date">
                    {dayjs(selectedOrder.orderSentTime).format('MM/DD/YY hh:mmA')}
                  </span>
                </div>

                <hr className="divider" />

                {selectedOrder.items.map(item => 
                  <div className="split-row" key={item.id}>
                    <div className="item-container">
                      <span className="item-name">
                        {item.quantity > 1 && `${item.quantity}x `}
                        {item.menuItem.name}
                      </span>
                      {item.foodOptions.map(foodOption => (
                        foodOption.options.map(option => <span className="item-option-name">{option.name}</span>)
                      ))}
                    </div>
                    <span className="item-price">
                      {(item.quantity * item.price / 100).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className='split-row'>
                  <span className='item-name-gray'>
                    Tax
                  </span>
                  <span className='item-price-gray'>
                    {(selectedOrder.tax / 100).toFixed(2)}
                  </span>
                </div>
                <div className='split-row'>
                  <span className='item-name-gray'>
                    Tip
                  </span>
                  <span className='item-price-gray'>
                    {(selectedOrder.tip / 100).toFixed(2)}
                  </span>
                </div>
                <div className='split-row'>
                  <span className='item-name'>
                    Total
                  </span>
                  <span className='item-price'>
                    ${(selectedOrder.totalPrice / 100).toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        :
          <header>
            <img className="portal-empty-image" src={bubbleIcon} />
            <span className="subheading">You have no active orders.</span>
            <b>Orders placed through the Toppings app today <br /> will appear here.</b>
          </header>
        }
      </div>
    }
    </article>
  );
}

export default PortalOrders;