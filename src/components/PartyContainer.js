import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';

import downArrowBlue from '../assets/images/down-arrow-blue.png';
import downArrowGray from '../assets/images/down-arrow-gray.png';

dayjs().format();

function PartyContainer(props) {
  const { party, selectedOrder, setSelectedOrder, selectedRun, setSelectedRun, assembleSelectedRun } = props;

  let partyViewed = party.restaurantFinishedPreparingMinutes ? true : false;

  const [expanded, setExpanded] = useState(true);

  const handleToggleExpand = (e) => {
    e.preventDefault();
    console.log('SKDGJH');
    // setExpanded(!expanded);
    assembleSelectedRun(party);
    setSelectedOrder(null);
  };

  const handleSelectOrder = (e, order) => {
    console.log(e);
    e.stopPropagation();

    setSelectedRun(null);
    setSelectedOrder(order);
  }

  return (
    <div className={"party-orders-container"} onClick={handleToggleExpand}>
      <div className='group-name-container'>
        {partyViewed ? (
          <img src={downArrowGray} className='down-arrow-button' alt="Click to expand viewed group" width="28px" height="14px" />
        ): (
          <img src={downArrowBlue} className='down-arrow-button' alt="Click to expand unviewed group" width="28px" height="14px" />
        )}
        <span 
          className={partyViewed ? 'viewed' : undefined}
          style={selectedRun?.id === party.id ? { fontWeight: 900 } : { fontWeight: 500 }}
        >
          {party.deliverer.name}'s Group
        </span>
      </div>
      {expanded &&
        <div className='party-orders-list'>
          {party.orders.map(order => 
            <span key={order.id} className={order.restaurantFinishedPreparingTimeWindow ? 'viewed' : undefined} style={selectedOrder?.id === order.id ? { fontWeight: 900 } : { fontWeight: 500 }} onClick={(e) => handleSelectOrder(e, order)}>{order.customer.name}</span>
          )}
        </div>
      }
    </div>
  )
}

export default PartyContainer;