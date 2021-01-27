import React, { useState, useEffect, useRef } from 'react';

import dashboardDesign from '../assets/images/dashboard-design.PNG';

function PortalDashboard(props) {
  return (
    <article className="portal-dashboard-container">
      <img src={dashboardDesign} />
    </article>
  );
}

export default PortalDashboard;
