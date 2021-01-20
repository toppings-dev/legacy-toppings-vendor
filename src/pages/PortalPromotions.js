import React, { useState, useEffect, useRef } from 'react';

import bubbleIcon from '../assets/images/bubble-icon-2.svg';

function PortalPromotions(props) {
  return (
    <article className="portal-promotions-container">
      <header>
        <img src={bubbleIcon} />
        <span className="subheading">You have no active promotions.</span>
        <b>Get users excited by adding promotions + <br /> reward opportunities!</b>
      </header>

      <div className="content">
        <button>Add Promotion</button>
      </div>
    </article>
  );
}

export default PortalPromotions;
