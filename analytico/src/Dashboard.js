// Dashboard.js

import React from 'react';

const Dashboard = ({ selectedElements }) => {
  return (
    <div className="dashboard">
      <h2>Selected Elements Dashboard</h2>
      <ul>
        {selectedElements.map((element, index) => (
          <li key={index}>
            <strong>{element.type}</strong> - {element.label} ({element.interactionCount} interactions)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
