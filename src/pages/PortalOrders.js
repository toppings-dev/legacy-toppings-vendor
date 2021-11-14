import React, { useState, useEffect, useRef } from 'react';

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

function PortalOrders(props) {
  const newOrderTimeStamp = 30;
  const preparingOrderTimeStamp = 15;
  const readyOrderTimeStamp = 5;
  const deliveredOrderTimeStamp = 0;
  const cancelledOrderTimeStamp = -1;
  const dingTimer = 5000;

  let restaurantSk = props.vendor.getVendor.restaurant.sk;
  let restaurantId = restaurantSk.slice(restaurantSk.lastIndexOf("#")+1)

  const audio = new Audio(ding);
  const [loading, setLoading] = useState(false);
  //const [audio] = useState(new Audio(ding));
  const [selectedOrder, selectOrder] = useState(null); 
  const [receivingOrders, setReceivingOrders] = useState(true);
  const [hasNew, setHasNew] = useState(false);
  const [orders, setOrders] = useState({
    // New: [{id: 73, deliverer: "Patrick Star", customer: "Gary", tip: 0.00, instructions: "Meow", items: [{name: "Golden Loaf", price: 2.50}, {name: "Krabby Patty", price: 2.99}]}, 
    //       {id: 72, deliverer: "Plankton", customer: "Karen", tip: 2.00, instructions: "Give me the secret formula Mr. Krabs!", items: [{name: "Krabby Patty", price: 2.99}]}],
    // Preparing: [{id: 71, deliverer: "Triton", customer: "King Neptune", tip: 1.00, instructions: "Extra jelly please!", items: [{name: "Jelly Patty", price: 3.99}, {name: "Jelly Patty", price: 3.99}, {name: "Jelly Patty", price: 3.99}]}, 
    //             {id: 70, deliverer: "Princess Mindy", customer: "King Neptune", tip: 0.80, instructions: "", items: [{name: "Fried Oyster Skin", price: 0.99}, {name: "Golden Loaf", price: 2.50}]}],
    // Ready: [{id: 69, deliverer: "Larry the Lobster", customer: "Mrs. Puff", tip: 1.00, instructions: "", items: [{name: "Krabby Patty", price: 2.99}, {name: "Krabby Patty", price: 2.99}, {name: "Jelly Patty", price: 3.99}]}]
    
    New: [],
    Preparing: [],
    Ready: [],
    // Cancelled: [],
  });
  let timerId;
  useEffect(() => {
    setLoading(true);
    
    getData();
    orderReceived();
  }, []);

  useInterval(() => {
    audio.play();
  }, hasNew ? dingTimer : null);
  
  async function toggleReceivingOrders() {
    console.log("TOG")
    console.log("selectedorder:", selectedOrder);
    const updatedRestaurant = {
      id: restaurantId,
      input: { isOpen: !receivingOrders ? "true" : "false", },
    };

    console.log("ur", updatedRestaurant)

    // const updatedRestaurantResponse = await API.graphql(graphqlOperation(mutations.updateRestaurant, { input: updatedRestaurant }));
    const updatedRestaurantResponse = await API.graphql(graphqlOperation(customMutations.updateRestaurant, updatedRestaurant));
    console.log(updatedRestaurantResponse)
    setReceivingOrders(updatedRestaurantResponse.data.updateRestaurantFields.isOpen === "true");
  }

  async function timerAdvanceOrder(order, currentStatus) {
    console.log("crashing is fun");
    advanceOrder(selectedOrder, "New");
    setTimeout(()=>advanceOrder(selectedOrder, "Preparing"), 900000);
  }
  async function advanceOrder(order, currentStatus) {
    console.log("advance status:", currentStatus);
    const ordersCopy = orders;
    ordersCopy[currentStatus] = ordersCopy[currentStatus].filter(item => item != order);
    if (currentStatus == "Incoming") {
      ordersCopy["New"].push(order);

    } else if (currentStatus == "New") {
      ordersCopy["Preparing"].push(order);
      const updatedOrder = {
        id: order.id,
        food_ready_time: preparingOrderTimeStamp,
        status: 'PREPARING',
      };

      await API.graphql(graphqlOperation(customMutations.updateFoodReady, updatedOrder));
      // const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
    } else if (currentStatus == "Preparing") {
      ordersCopy["Ready"].push(order);
      const updatedOrder = {
        id: order.id,
        food_ready_time: readyOrderTimeStamp,
        status: 'READY',
      };

      await API.graphql(graphqlOperation(customMutations.updateFoodReady, updatedOrder));
      // const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
    } else if (currentStatus == "Ready" || currentStatus == "Cancelled") {
      const updatedOrder = {
        id: order.id,
        food_ready_time: deliveredOrderTimeStamp
      };

      // const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.deleteOrder, { input: updatedOrder }));
      // const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
      await API.graphql(graphqlOperation(customMutations.updateFoodReady, updatedOrder));
      selectOrder(null);
    }

    if (ordersCopy.New.length + ordersCopy.Preparing.length + ordersCopy.Ready.length <= 0) {
      selectOrder(null);
    }
    if (ordersCopy.New.length < 1) {
      console.log("RESET AUDIO");
      setHasNew(false);
    }

    setOrders({... ordersCopy});
  }
  async function orderReceived() {

    await API.graphql(graphqlOperation(customSubscription.onCreateNewPickup)).subscribe({ next: (eventData) => {
      console.log("EDY", eventData);
      getData();
    }});

    await API.graphql(graphqlOperation(customSubscription.onCreateNewOrder)).subscribe({ next: (eventData) => {
      console.log("EDZ", eventData);
      getData();
      // const order = eventData.value.data.onUpdateOrder;
      // const oldOrder = [...orders.New, ...orders.Preparing, ...orders.Ready].filter(o => o.id == order.id)[0];
      // console.log("RECEIVED", order);
      // console.log("EXISTING?", oldOrder);
      // if (order.restaurant.id == restaurantId && order.isPaid) {
      //   if (order.food_ready_time == null || order.food_ready_time >= newOrderTimeStamp) {
      //     const date = new Date(Date.parse(order.createdAt));
      //     const newOrder = {
      //       ...order,
      //       id: order.id,
      //       deliverer: order.pickup.deliverer.name,
      //       customer: order.customer.name,
      //       tip: order.tip,
      //       instructions: order.comment != null ? order.comment.toString() : "",
      //       items: order.orderItems.items,
      //       time: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} (${date.getMonth() + 1}/${date.getDate()})`,
      //       food_ready_time: order.hasOwnProperty("food_ready_time") && order.food_ready_time != null ? order.food_ready_time : newOrderTimeStamp,
      //     };

      //     /*if (newOrder.closed && newOrder.food_ready_time > deliveredOrderTimeStamp) {
      //       setOrders(oldOrders => ({
      //         ...oldOrders,
      //         Cancelled: [newOrder, ...oldOrders["Cancelled"]],
      //       }));
      //     } else */if (newOrder.food_ready_time > preparingOrderTimeStamp) {
      //       setOrders(oldOrders => ({
      //         ...oldOrders,
      //         New: [newOrder, ...oldOrders["New"]],
      //       }));
      //       audio.play();
      //     } else if (newOrder.food_ready_time > readyOrderTimeStamp) {
      //       setOrders(oldOrders => ({
      //         ...oldOrders,
      //         Preparing: [newOrder, ...oldOrders["Preparing"]],
      //       }));
      //     } else if (newOrder.food_ready_time > deliveredOrderTimeStamp) {
      //       setOrders(oldOrders => ({
      //         ...oldOrders,
      //         Ready: [newOrder, ...oldOrders["Ready"]],
      //       }));
      //     }
      //   } /*else if (oldOrder != null && !oldOrder.closed && order.closed) {
      //     setOrders(oldOrders => ({
      //       ...oldOrders,
      //       Cancelled: [newOrder, ...oldOrders["Cancelled"]],
      //     }));
      //   }*/
      // }
    }});
  }

  async function getData() {
    console.log("PROPS", props.vendor);
    const receivedOrdersResponse = await API.graphql(graphqlOperation(customQueries.listOrdersByRestaurant, { restaurantId: restaurantId }));
    // const receivedOrdersResponse = await API.graphql(graphqlOperation(queries.listOrders));
    console.log(receivedOrdersResponse);
    const receivedOrders = receivedOrdersResponse.data.listOrdersByRestaurant;
    for (let i = 0; i < receivedOrders?.data?.listOrdersByRestaurant?.length; i++) {
      receivedOrders.data.listOrdersByRestaurant[i].customer = JSON.parse(receivedOrders.data.listOrdersByRestaurant[i].customer);
      receivedOrders.data.listOrdersByRestaurant[i].pickup.deliverer = JSON.parse(receivedOrders.data.listOrdersByRestaurant[i].pickup.deliverer);
    }

    setOrders({
      New: [],
      Preparing: [],
      Ready: [],
    });
    receivedOrders.forEach(order => {
      if (order.restaurant.id == restaurantId && order.isPaid) {
        const date = new Date(Date.parse(order.createdAt));
        console.log("ORDER INFO:", order);
        const myOrder = {
          ...order,
          id: order.id, 
          deliverer: JSON.parse(order.pickup.deliverer).name, 
          customer: JSON.parse(order.customer).name, 
          tip: order.tip, 
          instructions: order.comment != null ? order.comment.toString() : "",
          items: order.orderItems.items,
          time: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} (${date.getMonth() + 1}/${date.getDate()})`,
          food_ready_time: order.hasOwnProperty("food_ready_time") && order.food_ready_time != null ? order.food_ready_time : newOrderTimeStamp,
        }
        console.log("myorder info", myOrder.customer)
        /*if (myOrder.closed && myOrder.food_ready_time > deliveredOrderTimeStamp) {
          setOrders(oldOrders => ({
            ...oldOrders,
            Cancelled: [myOrder, ...oldOrders["Cancelled"]],
          }));
        } else*/ if (/*!myOrder.closed && */myOrder.food_ready_time > preparingOrderTimeStamp) {
          setOrders(oldOrders => ({
            ...oldOrders,
            New: [myOrder, ...oldOrders["New"]],
          }));
          setHasNew(true);
          console.log('set hasNew to true', myOrder)
        }  else if (/*!myOrder.closed && */myOrder.food_ready_time > deliveredOrderTimeStamp) {
          setOrders(oldOrders => ({
            ...oldOrders,
            Ready: [myOrder, ...oldOrders["Ready"]],
          }));
        }
        // else if (/*!myOrder.closed && */myOrder.food_ready_time > readyOrderTimeStamp) {
        //   setOrders(oldOrders => ({
        //     ...oldOrders,
        //     Preparing: [myOrder, ...oldOrders["Preparing"]],
        //   }));
        // } else if (/*!myOrder.closed && */myOrder.food_ready_time > deliveredOrderTimeStamp) {
        //   setOrders(oldOrders => ({
        //     ...oldOrders,
        //     Ready: [myOrder, ...oldOrders["Ready"]],
        //   }));
        // }
      }
    });

    setLoading(false);
  }

  console.log("ORDERS:", orders);
  return (
    <article className="portal-orders-container">
    {loading ? 
      <div>
        <header>
          <img className="portal-empty-image" src={loadingBubbleIcon} />
          <span className="subheading">Loading...</span>
        </header>
      </div>  
    :
      <div>
        {Object.keys(orders).length > 0 ?
          <div className="portal-orders-subcontainer">
            <div className="orders-list">
              <header>
                <span className="orange-subheading">{`${new Date().getMonth() + 1}/${String(new Date().getDate()).padStart(2, "0")}/${String(new Date().getFullYear()).slice(2, 4)}`}</span>
                <button className={receivingOrders ? "orange tag" : "red tag"} onClick={toggleReceivingOrders}>Receiving New Orders {receivingOrders ? <img className="checkmark" src={whiteCheckmark} /> : <span className="x">&#215;</span>}</button>
              </header>
              <div>
                <span className="order-category">Current</span>
                <div>
                  {orders.New.length > 0 &&
                    orders.New.sort((order1, order2) => (order1.time.split(" ")[1] + order1.time.split(" ")[0] > order2.time.split(" ")[1] + order2.time.split(" ")[0] ? 1 : -1)).map(order => 
                      <div key={order.id} className={selectedOrder == order ? "order-container active" : "order-container"} onClick={() => {selectOrder(order); console.log(order)}}>
                        <span>#{order.id.slice(0, 5)}...</span>  
                        <span><button>New</button></span>
                      </div>
                    )
                  }
                  {orders.Preparing.length > 0 &&
                    orders.Preparing.sort((order1, order2) => (order1.time.split(" ")[1] + order1.time.split(" ")[0] > order2.time.split(" ")[1] + order2.time.split(" ")[0] ? 1 : -1)).map(order => 
                      <div key={order.id} className={selectedOrder == order ? "order-container active" : "order-container"} onClick={() => {selectOrder(order); console.log(order)}}>
                        <span>#{order.id.slice(0, 5)}...</span> 
                      </div>
                    )
                  }
                </div>
                <span className="order-category">Completed</span>
                <div>
                  {orders.Ready.length > 0 &&
                    orders.Ready.sort((order1, order2) => (order1.time.split(" ")[1] + order1.time.split(" ")[0] > order2.time.split(" ")[1] + order2.time.split(" ")[0] ? 1 : -1)).map(order => 
                      <div key={order.id} className={selectedOrder == order ? "order-container active" : "order-container"} onClick={() => {selectOrder(order); console.log(order)}}>
                        <span>#{order.id.slice(0, 5)}...</span>  
                      </div>
                    )
                  }
                </div>
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
            <div className="portal-orders-info">
              {selectedOrder != null ? 
                <div>
                  <header>
                    <span className="subheading">Items <br />
                      <span className="blue-subheading">{selectedOrder.items.length}</span>
                    </span>
                    
                    <span className="subheading">Deliverer <br />
                      <span className="blue-subheading">{selectedOrder.deliverer}</span>
                    </span>
                    
                    <span className="subheading">Customer <br />
                      <span className="blue-subheading">{selectedOrder.customer}</span>
                    </span>
                  </header>

                  <div className="order-details">
                    {orders.Preparing.indexOf(selectedOrder) > -1 ? 
                      <div className="order-delivery-time">
                        <span className="blue-subheading">Estimated Time:</span>
                        <button className="blue">15 Minutes</button>
                      </div>
                    : ""} 

                    {orders.Ready.indexOf(selectedOrder) > -1 ? 
                      <div className="order-delivery-time">
                        {/* <span className="blue-subheading">Waiting for delivery confirmation.</span> */}
                      </div>
                    : ""}

                    <span className="heading">Order #{selectedOrder.id.slice(0, 5)} - {selectedOrder.time}</span>
                    {false && selectedOrder.closed ? <span className="red-subheading">Order Closed</span> : ""}
                    <hr className="short" />

                    <div className="order-bill">
                      {selectedOrder.items.map((item => 
                        <div key={Math.random()} className="order-item">
                          <span className="order-item-name">{item.itemName}</span><br />
                          {/*<span key={Math.random()} style={{fontSize: "1rem", marginTop: "0.5rem"}}>{item.comment.toString().slice(1, -1)}</span>*/}
                          {/* <span className="order-item-price">{item.price}</span> */}
                          {item.foodOptionsArray != null ? 
                            <ul className="order-item-toppings">
                              {item.foodOptionsArray.map((topping => 
                                <li key={Math.random()}>{topping}</li>  
                              ))}
                            </ul>
                          : "" }
                        </div>
                      ))}
                      <br />
                      {/* <div className="order-tax-tip">
                        <span className="order-item-name">Tax</span>
                        <span className="order-item-price">${(Math.round(15 * selectedOrder.items.reduce((a, b) => a + (b.price || 0), 0)) * 0.01).toFixed(2)}</span>
                      </div>
                      <div className="order-tax-tip">
                        <span className="order-item-name">Tip</span>
                        <span className="order-item-price">${selectedOrder.tip}</span> {/*add back in to fixed 
                      </div>
                      <br />
                      <div className="order-total">
                        <span className="order-item-name">Total</span>
                        <span className="order-item-price">${(selectedOrder.tip + (Math.round(15 * selectedOrder.items.reduce((a, b) => a + (b.price || 0), 0)) * 0.01) + selectedOrder.items.reduce((a, b) => a + (b.price || 0), 0)).toFixed(2)}</span>
                      </div> */}
                      <br />

                      <hr />
                      <span className="subheading">Payment Confirmed <img className="checkmark" src={grayCheckmark} /></span>
                      <hr />
              
                      <div className="order-instructions">
                        <span className="heading">Special Instructions</span>
                        <hr className="short" />
                        <span>{selectedOrder.instructions.length > 0 ? "\"" + selectedOrder.instructions + "\"" : "None"}</span>
                      </div>

                      <button className="gray">Report Issue</button>
                      {orders.New.indexOf(selectedOrder) > -1 ? 
                        <button className="orange" onClick={() => timerAdvanceOrder(selectedOrder, "New")}>Accept</button>
                      : orders.Preparing.indexOf(selectedOrder) > -1 ? 
                        <button className="orange">Accepted</button>
                      // : orders.Ready.indexOf(selectedOrder) > -1 ? 
                      //   <button className="orange">Completed</button>
                      /*: orders.Cancelled.indexOf(selectedOrder) > -1 ?
                      <button className="orange" onClick={() => advanceOrder(selectedOrder, "Cancelled")}>Confirm</button>*/
                      : ""}
                    </div>
                  </div>
                  </div>
              : ""}
            </div>
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