// ClickIndicator.js

import React from 'react';

const ClickIndicator = ({ position }) => {
  return (
    <div className="click-indicator" style={{ top: position.y, left: position.x }}>
      Clicked!
    </div>
  );
};

export default ClickIndicator;
