import React, { useState, useEffect, useRef } from 'react';

function PartyContainer(props) {
  const { partyOrders } = props;

  const [expanded, setExpanded] = useState(false);

  console.log(partyOrders.orders);
  const handleToggleExpand = () => {
    console.log('SKDGJH');
    setExpanded(!expanded)
  };

  return (
    <div className={"party-orders-container"} onClick={handleToggleExpand}>
      <span className={expanded ? 'expanded' : undefined}>{partyOrders.delivererName}'s Group</span>
      {expanded &&
        <div className='party-orders-list'>
          {partyOrders.orders.map(order => 
            <p key={order.id}>{order.customer.name}</p>
          )}
        </div>
      }
    </div>
  )
}

export default PartyContainer;