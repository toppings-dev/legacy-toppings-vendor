import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';

import downArrowBlue from '../assets/images/down-arrow-blue.png';
import downArrowGray from '../assets/images/down-arrow-gray.png';

dayjs().format();

function PartyContainer(props) {
  const { partyOrders, selectedOrder, setSelectedOrder } = props;

  const [expanded, setExpanded] = useState(false);

  console.log(partyOrders.orders[0].restaurantFinishedPreparingTimeWindow ? 'viewed' : undefined);
  const handleToggleExpand = (e) => {
    e.preventDefault();
    console.log('SKDGJH');
    setExpanded(!expanded)
  };

  const handleSelectOrder = (e, order) => {
    console.log(e);
    e.stopPropagation();

    setSelectedOrder(order);
  }

  return (
    <div className={"party-orders-container"} onClick={handleToggleExpand}>
      <div className='group-name-container'>
        {partyOrders.partyViewed ? (
          <img src={downArrowBlue} className='down-arrow-button' alt="Click to expand viewed group" width="28px" height="14px" />
        ): (
          <img src={downArrowGray} className='down-arrow-button' alt="Click to expand unviewed group" width="28px" height="14px" />
        )}
        <span className={partyOrders.partyViewed ? 'viewed' : undefined}>{partyOrders.delivererName}'s Group</span>
      </div>
      {expanded &&
        <div className='party-orders-list'>
          {partyOrders.orders.map(order => 
            <span key={order.id} className={order.restaurantFinishedPreparingTimeWindow ? 'viewed' : undefined} style={selectedOrder?.id === order.id ? { fontWeight: 900 } : { fontWeight: 500 }}onClick={(e) => handleSelectOrder(e, order)}>{order.customer.name}</span>
          )}
        </div>
      }
    </div>
  )
}

export default PartyContainer;