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
import { useQuery } from '@apollo/client';

import PartyContainer from '../components/PartyContainer';

function PortalOrders(props) {
  const { restaurant } = props;

  const newOrderTimeStamp = 30;
  const preparingOrderTimeStamp = 15;
  const readyOrderTimeStamp = 5;
  const deliveredOrderTimeStamp = 0;
  const cancelledOrderTimeStamp = -1;
  const dingTimer = 5000;

  const audio = new Audio(ding);
  const [loading, setLoading] = useState(false);
  //const [audio] = useState(new Audio(ding));
  const [selectedOrder, selectOrder] = useState(null); 
  const [receivingOrders, setReceivingOrders] = useState(true);
  const [hasNew, setHasNew] = useState(false);

  let timerId;

  useInterval(() => {
    audio.play();
  }, hasNew ? dingTimer : null);

  let { data: ordersData, loading: ordersLoading, error: ordersError } = useQuery(customQueries.LIST_ORDERS_BY_RESTAURANT, {
    variables: {
      restaurantId: restaurant?.id,
    },
    skip: !(restaurant?.id)
  });

  let ordersByParty = {};
  if (ordersData?.listOrdersByRestaurant) {
    let orders = ordersData.listOrdersByRestaurant;
    
    for (const order of orders) {
      if (!ordersByParty[order.deliverer.id]) {
        ordersByParty[order.deliverer.id] = {
          delivererName: order.deliverer.name,
          orders: [],
        };
      }
      ordersByParty[order.deliverer.id].orders.push(order);
    }
    console.log(ordersByParty);
  }


  return (
    <article className="portal-orders-container">
    {ordersLoading || !ordersByParty ? 
      <div>
        <header>
          <img className="portal-empty-image" src={loadingBubbleIcon} />
          <span className="subheading">Loading...</span>
        </header>
      </div>  
    :
      <div>
        {Object.keys(ordersByParty).length > 0 ?
          <div className="portal-orders-subcontainer">
            <div className="orders-list">
              <div>
                {Object.entries(ordersByParty).map(([delivererId, partyOrders]) => 
                  <PartyContainer key={delivererId} partyOrders={partyOrders} />
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