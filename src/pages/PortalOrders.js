import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions'

import loadingBubbleIcon from '../assets/images/bubble-icon-1.svg';
import bubbleIcon from '../assets/images/bubble-icon-2.svg';
import whiteCheckmark from '../assets/images/white-checkmark.svg';
import grayCheckmark from '../assets/images/gray-checkmark.svg';
import ding from '../assets/audio/ding.mp3';

function PortalOrders(props) {
  const newOrderTimeStamp = 30;
  const preparingOrderTimeStamp = 15;
  const readyOrderTimeStamp = 5;
  const deliveredOrderTimeStamp = 0;

  const [loading, setLoading] = useState(false);
  const [audio] = useState(new Audio(ding));
  const [selectedOrder, selectOrder] = useState(null); 
  const [orders, setOrders] = useState({
    // New: [{id: 73, deliverer: "Patrick Star", customer: "Gary", tip: 0.00, instructions: "Meow", items: [{name: "Golden Loaf", price: 2.50}, {name: "Krabby Patty", price: 2.99}]}, 
    //       {id: 72, deliverer: "Plankton", customer: "Karen", tip: 2.00, instructions: "Give me the secret formula Mr. Krabs!", items: [{name: "Krabby Patty", price: 2.99}]}],
    // Preparing: [{id: 71, deliverer: "Triton", customer: "King Neptune", tip: 1.00, instructions: "Extra jelly please!", items: [{name: "Jelly Patty", price: 3.99}, {name: "Jelly Patty", price: 3.99}, {name: "Jelly Patty", price: 3.99}]}, 
    //             {id: 70, deliverer: "Princess Mindy", customer: "King Neptune", tip: 0.80, instructions: "", items: [{name: "Fried Oyster Skin", price: 0.99}, {name: "Golden Loaf", price: 2.50}]}],
    // Ready: [{id: 69, deliverer: "Larry the Lobster", customer: "Mrs. Puff", tip: 1.00, instructions: "", items: [{name: "Krabby Patty", price: 2.99}, {name: "Krabby Patty", price: 2.99}, {name: "Jelly Patty", price: 3.99}]}]
    
    New: [],
    Preparing: [],
    Ready: []
  });

  useEffect(() => {
    getData();
    orderReceived();
  }, []);

  async function advanceOrder(order, currentStatus) {
    const ordersCopy = orders;
    ordersCopy[currentStatus] = ordersCopy[currentStatus].filter(item => item != order);
    if (currentStatus == "Incoming") {
      ordersCopy["New"].push(order);

    } else if (currentStatus == "New") {
      ordersCopy["Preparing"].push(order);
      const updatedOrder = {
        id: order.id,
        food_ready_time: preparingOrderTimeStamp,
      };

      const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
    } else if (currentStatus == "Preparing") {
      ordersCopy["Ready"].push(order);
      const updatedOrder = {
        id: order.id,
        food_ready_time: readyOrderTimeStamp,
      };

      const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
    } else if (currentStatus == "Ready") {
      const updatedOrder = {
        id: order.id,
        food_ready_time: deliveredOrderTimeStamp,
      };

      // const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.deleteOrder, { input: updatedOrder }));
      const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
      selectOrder(null);
    }

    if (ordersCopy.New.length + ordersCopy.Preparing.length + ordersCopy.Ready.length <= 0) {
      selectOrder(null);
    }

    setOrders({... ordersCopy});
  }

  async function orderReceived() {
    await API.graphql(graphqlOperation(subscriptions.onCreateOrder)).subscribe({ next: (eventData) => {
      const order = eventData.value.data.onCreateOrder;
      console.log("RECEIVED", order);
      if (order.restaurant.id == props.restaurant.id && order.isPaid && (order.food_ready_time == null || order.food_ready_time >= newOrderTimeStamp)) {
        const date = new Date(Date.parse(order.createdAt));
        const newOrder = {
          id: order.id,
          deliverer: order.pickup.deliverer.name,
          customer: order.customer.name,
          tip: order.tip,
          instructions: order.comment != null ? order.comment.toString() : "",
          items: order.orderItems.items,
          time: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} (${date.getMonth() + 1}/${date.getDate()})`,
          food_ready_time: order.hasOwnProperty("food_ready_time") && order.food_ready_time != null ? order.food_ready_time : newOrderTimeStamp,
        };

        if (newOrder.food_ready_time > preparingOrderTimeStamp) {
          setOrders(oldOrders => ({
            ...oldOrders,
            New: [newOrder, ...oldOrders["New"]],
          }));
          audio.play();
        } else if (newOrder.food_ready_time > readyOrderTimeStamp) {
          setOrders(oldOrders => ({
            ...oldOrders,
            Preparing: [newOrder, ...oldOrders["Preparing"]],
          }));
        } else if (newOrder.food_ready_time > 0) {
          setOrders(oldOrders => ({
            ...oldOrders,
            Ready: [newOrder, ...oldOrders["Ready"]],
          }));
        }
      }
    }});
  }

  async function getData() {
    setLoading(true);
    const receivedOrdersResponse = await API.graphql(graphqlOperation(queries.listOrders));
    const receivedOrders = receivedOrdersResponse.data.listOrders.items.filter(order => order.restaurant != null && order.restaurant.id == props.restaurant.id && order.orderItems.items.length > 0);
    
    receivedOrders.forEach(order => {
      if (order.restaurant.id == props.restaurant.id && order.isPaid) {
        const date = new Date(Date.parse(order.createdAt));
        const myOrder = {
          id: order.id, 
          deliverer: order.pickup.deliverer.name, 
          customer: order.customer.name, 
          tip: order.tip, 
          instructions: order.comment != null ? order.comment.toString() : "",
          items: order.orderItems.items,
          time: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} (${date.getMonth() + 1}/${date.getDate()})`,
          food_ready_time: order.hasOwnProperty("food_ready_time") && order.food_ready_time != null ? order.food_ready_time : newOrderTimeStamp,
        }

        if (myOrder.food_ready_time > preparingOrderTimeStamp) {
          setOrders(oldOrders => ({
            ...oldOrders,
            New: [myOrder, ...oldOrders["New"]],
          }));
        } else if (myOrder.food_ready_time > readyOrderTimeStamp) {
          setOrders(oldOrders => ({
            ...oldOrders,
            Preparing: [myOrder, ...oldOrders["Preparing"]],
          }));
        } else if (myOrder.food_ready_time > 0) {
          setOrders(oldOrders => ({
            ...oldOrders,
            Ready: [myOrder, ...oldOrders["Ready"]],
          }));
        }
      }
    });
    setLoading(false);
  }

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
                <span className="orange-subheading">1/27/21</span>
                <button className="tag">Receiving New Orders <img className="checkmark" src={whiteCheckmark} /></button>
              </header>
                {Object.keys(orders).map((category =>
                  <div key={category}>
                    <span className="order-category">{category}</span>

                    <div className="order-category-container">
                      {orders[category].length > 0 ?
                        orders[category].sort((order1, order2) => (order1.time.split(" ")[1] + order1.time.split(" ")[0] > order2.time.split(" ")[1] + order2.time.split(" ")[0] ? 1 : -1)).map(order => 
                          <div key={order.id} className={selectedOrder == order ? "order-container active" : "order-container"} onClick={() => {selectOrder(order); console.log(order)}}>
                            <span>#{order.id.slice(0, 5)}...</span> 
                            <span>{category == "New" ? <button>New</button> : ""}</span>
                          </div>
                        )
                      : 
                        <div className="empty-order-container">
                          {category == "New" ? "No new orders." : category == "Preparing" ? "No orders are being prepared." : category == "Ready" ? "No orders are ready." : ""}
                        </div>
                      }
                    </div>
                  </div> 
                ))}
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
                        <span className="blue-subheading">Waiting for delivery confirmation.</span>
                      </div>
                    : ""}

                    <span className="heading">Order #{selectedOrder.id.slice(0, 5)} - {selectedOrder.time}</span>
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
                                <li>{topping}</li>  
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
                        <button className="orange" onClick={() => advanceOrder(selectedOrder, "New")}>Confirm Order</button>
                      : orders.Preparing.indexOf(selectedOrder) > -1 ? 
                        <button className="orange" onClick={() => advanceOrder(selectedOrder, "Preparing")}>Ready for Pickup</button>
                      : orders.Ready.indexOf(selectedOrder) > -1 ? 
                        <button className="orange" onClick={() => advanceOrder(selectedOrder, "Ready")}>Delivered</button>
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