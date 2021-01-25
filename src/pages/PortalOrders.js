import React, { useState, useEffect, useRef } from 'react';

import bubbleIcon from '../assets/images/bubble-icon-2.svg';

function PortalOrders(props) {
  const [orders, setOrders] = useState({});

  return (
    <article className="portal-promotions-container">
      {Object.keys(orders).length > 0 ?
        <div className="portal"></div>
      :
        <header>
          <img src={bubbleIcon} />
          <span className="subheading">You have no active orders.</span>
          <b>Orders placed through the Toppings app today <br /> will appear here.</b>
        </header>
      }
    </article>
  );
}

export default PortalOrders;
