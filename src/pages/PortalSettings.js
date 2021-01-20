import React, { useState, useEffect, useRef } from 'react';

function PortalSettings(props) {
  return (
    <article className="portal-settings-container">
      <h3>Account Settings</h3>

      <label for="name">Name</label><input className="text-input" type="text" ref={settingsNameInput} />
      <label for="email">Email Address</label><input className="text-input" type="email" ref={settingsEmailInput} />
      <label for="phone">Phone Number</label><input className="text-input" type="tel" ref={settingsPhoneInput} />
      <label for="business-name">Business Name</label><input className="text-input" type="text" ref={settingsBusinessNameInput} />
      <label for="address">Business Address</label><input className="text-input" type="text" ref={settingsAddressInput} />
      <button>Edit</button>
    </article>
  );
}

export default PortalSettings;
