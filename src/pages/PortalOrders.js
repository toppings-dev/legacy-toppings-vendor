import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions'

import { getCurrentUser, setCurrentUser, getCurrentPage, setCurrentPage, clearSession } from '../utils/session';
import useInterval from '../utils/useInterval';

import loadingBubbleIcon from '../assets/images/bubble-icon-1.svg';
import bubbleIcon from '../assets/images/bubble-icon-2.svg';
import whiteCheckmark from '../assets/images/white-checkmark.svg';
import grayCheckmark from '../assets/images/gray-checkmark.svg';
import ding from '../assets/audio/ding.mp3';
import { Redirect } from 'react-router';

function PortalOrders(props) {
  const subscriptionTimeout = (30000 - 1800) * 1000;
  // const subscriptionTimeout = 5 * 1000;

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentPage, setCurrentPage] = useState("orders");
  const [loading, setLoading] = useState(false);
  const [audio] = useState(new Audio(ding));
  const [selectedOrder, selectOrder] = useState(null); 
  const [receivingOrders, setReceivingOrders] = useState(props.restaurant.isOpen);
  const [subscriptionRunning, setSubscriptionRunning] = useState(false);
  const [orderSubscription, setOrderSubscription] = useState(null);
  const [subscriptionInterval, setSubscriptionInterval] = useState(subscriptionTimeout);
  const [orders, setOrders] = useState({
    New: [],
    Preparing: [],
    Ready: [],
  });

  useEffect(() => {
    let mounted = true;

    let user = getCurrentUser();
    let page = getCurrentPage();
    if (mounted) {
      setLoggedIn(user != null);
      setCurrentPage(page);
      setSubscriptionRunning(true);
      setOrderSubscription(API.graphql(graphqlOperation(subscriptions.onUpdateOrder)));
    }

    getData(mounted);

    return () => {
      mounted = false;
    };
  }, []);

  useInterval(() => {
    window.location.reload();
    // setSubscriptionInterval(subscriptionTimeout);
    // console.log("START SUB INTERVAL")
    // if (orderSubscription != null) {
    //   // orderSubscription.unsubscribe();
    //   orderSubscription.subscribe({ next: (eventData) => {
    //     const order = eventData.value.data.onUpdateOrder;
    //     const oldOrder = [...orders.New, ...orders.Preparing, ...orders.Ready].filter(o => o.id == order.id)[0];
    //     console.log("RECEIVED", order);
    //     console.log("EXISTING?", oldOrder);
    //     if (order.restaurant.id == props.restaurant.id && order.isPaid && order.status == "ACCEPTED") {
    //       const date = new Date(Date.parse(order.createdAt));
    //       const newOrder = {
    //         ...order,
    //         id: order.id,
    //         deliverer: order.pickup.deliverer.name,
    //         customer: order.customer.name,
    //         tip: order.tip,
    //         instructions: order.comment != null ? order.comment.toString() : "",
    //         items: order.orderItems.items,
    //         time: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} (${date.getMonth() + 1}/${date.getDate()})`,
    //       };

    //       if (newOrder.status == "ACCEPTED") {
    //         setOrders(oldOrders => ({
    //           ...oldOrders,
    //           New: [newOrder, ...oldOrders["New"]],
    //         }));
    //         audio.play();
    //       } else if (newOrder.status == "PREPARING") {
    //         setOrders(oldOrders => ({
    //           ...oldOrders,
    //           Preparing: [newOrder, ...oldOrders["Preparing"]],
    //         }));
    //       } else if (newOrder.status == "READY") {
    //         setOrders(oldOrders => ({
    //           ...oldOrders,
    //           Ready: [newOrder, ...oldOrders["Ready"]],
    //         }));
    //       }
    //     }
    //   }});
    // }
  }, subscriptionInterval);
  
  useEffect(() => {
    let subscribed = true;
    // console.log("Subscribed?", subscribed);

    let orderSubscription = API.graphql(graphqlOperation(subscriptions.onUpdateOrder)).subscribe({ next: (eventData) => {
      const order = eventData.value.data.onUpdateOrder;
      const oldOrder = [...orders.New, ...orders.Preparing, ...orders.Ready].filter(o => o.id == order.id)[0];
      console.log("RECEIVED", order);
      console.log("EXISTING?", oldOrder);
      if (order.restaurant.id == props.restaurant.id && order.isPaid && order.status == "ACCEPTED") {
        const date = new Date(Date.parse(order.createdAt));
        const newOrder = {
          ...order,
          id: order.id,
          deliverer: order.pickup.deliverer.name,
          customer: order.customer.name,
          tip: order.tip,
          instructions: order.comment != null ? order.comment.toString() : "",
          items: order.orderItems.items,
          time: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} (${date.getMonth() + 1}/${date.getDate()})`,
        };

        if (newOrder.status == "ACCEPTED") {
          setOrders(oldOrders => ({
            ...oldOrders,
            New: [newOrder, ...oldOrders["New"]],
          }));
          audio.play();
        } else if (newOrder.status == "PREPARING") {
          setOrders(oldOrders => ({
            ...oldOrders,
            Preparing: [newOrder, ...oldOrders["Preparing"]],
          }));
        } else if (newOrder.status == "READY") {
          setOrders(oldOrders => ({
            ...oldOrders,
            Ready: [newOrder, ...oldOrders["Ready"]],
          }));
        }
      }
    }});

    return () => {
      subscribed = false;
      // console.log("Still Subscribed?", subscribed);
      orderSubscription.unsubscribe();
    };
  }, [subscriptionRunning]);
  
  async function getData(mounted) {
    const receivedOrdersResponse = await API.graphql(graphqlOperation(queries.listOrders));
    const receivedOrders = receivedOrdersResponse.data.listOrders.items.filter(order => order.restaurant != null && order.restaurant.id == props.restaurant.id && order.orderItems.items.length > 0);
    
    if (receivedOrders.length == 0) {
      // setLoading(false);
    }
    receivedOrders.forEach(order => {
      if (mounted && order.restaurant.id == props.restaurant.id && order.isPaid) {
        const date = new Date(Date.parse(order.createdAt));
        const myOrder = {
          ...order,
          id: order.id, 
          deliverer: order.pickup.deliverer.name, 
          customer: order.customer.name, 
          tip: order.tip, 
          instructions: order.comment != null ? order.comment.toString() : "",
          items: order.orderItems.items,
          time: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} (${date.getMonth() + 1}/${date.getDate()})`,
        }

        if (myOrder.status == "ACCEPTED") {
          setOrders(oldOrders => ({
            ...oldOrders,
            New: [myOrder, ...oldOrders["New"]],
          }));
        } else if (myOrder.status == "PREPARING") {
          setOrders(oldOrders => ({
            ...oldOrders,
            Preparing: [myOrder, ...oldOrders["Preparing"]],
          }));
        } else if (myOrder.status == "READY") {
          setOrders(oldOrders => ({
            ...oldOrders,
            Ready: [myOrder, ...oldOrders["Ready"]],
          }));
        }

        setLoading(false);
      }
    });
  }

  async function toggleReceivingOrders() {
    const updatedRestaurant = {
      id: props.restaurant.id,
      isOpen: !receivingOrders,
    };

    const updatedRestaurantResponse = await API.graphql(graphqlOperation(mutations.updateRestaurant, { input: updatedRestaurant }));
    setReceivingOrders(updatedRestaurantResponse.data.updateRestaurant.isOpen);
  }

  async function advanceOrder(order, currentStatus) {
    const ordersCopy = orders;
    ordersCopy[currentStatus] = ordersCopy[currentStatus].filter(item => item != order);
    if (currentStatus == "Incoming") {
      ordersCopy["New"].push(order);
    } else if (currentStatus == "New") {
      order.status = "PREPARING";
      ordersCopy["Preparing"].push(order);
      const updatedOrder = {
        id: order.id,
        status: "PREPARING"
      };

      const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
    } else if (currentStatus == "Preparing") {
      order.status = "READY";
      ordersCopy["Ready"].push(order);
      const updatedOrder = {
        id: order.id,
        status: "READY"
      };

      const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
    } else if (currentStatus == "Ready" || currentStatus == "Cancelled") {
      const updatedOrder = {
        id: order.id,
        status: "PICKEDUP"
      };

      const updatedOrderResponse = await API.graphql(graphqlOperation(mutations.updateOrder, { input: updatedOrder }));
      selectOrder(null);
    }

    if (ordersCopy.New.length + ordersCopy.Preparing.length + ordersCopy.Ready.length <= 0) {
      selectOrder(null);
    }
    setOrders({...ordersCopy});
  }

  return (
    <article className="portal-orders-container">
    {!loggedIn ? 
      <Redirect to="/portal-auth/sign-in" />
    : currentPage != "orders" ? 
      <Redirect to={`/portal/${currentPage}`} />
    : loading ? 
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
                {Object.keys(orders).map((category =>
                  <div key={category}>
                    <span className="order-category">{category == "Cancelled" ? "Cancelled/Closed" : category}</span>

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
                          {category == "New" ? "No new orders." : category == "Preparing" ? "No orders are being prepared." : category == "Ready" ? "No orders are ready." : category == "Cancelled" ? "No cancelled orders." : ""}
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
                        <button className="orange" onClick={() => advanceOrder(selectedOrder, "New")}>Confirm Order</button>
                      : orders.Preparing.indexOf(selectedOrder) > -1 ? 
                        <button className="orange" onClick={() => advanceOrder(selectedOrder, "Preparing")}>Ready for Pickup</button>
                      : orders.Ready.indexOf(selectedOrder) > -1 ? 
                        <button className="orange" onClick={() => advanceOrder(selectedOrder, "Ready")}>Delivered</button>
                      : orders.Cancelled.indexOf(selectedOrder) > -1 ?
                      <button className="orange" onClick={() => advanceOrder(selectedOrder, "Cancelled")}>Confirm</button>
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