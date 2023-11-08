// App.js

import React, { useState } from 'react';
import './App.css';
import logoImage from './Logo.png';
import Dashboard from './Dashboard'; // Import the Dashboard component
import ClickIndicator from './ClickIndicator'; // Import the ClickIndicator component


function App() {
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedElements, setSelectedElements] = useState([]);
  const [clickIndicator, setClickIndicator] = useState(null);

  const handleToggleSelectionMode = () => {
    setSelectionMode(!selectionMode);
  };

  const handleElementClick = (elementType, elementLabel, event) => {
    if (selectionMode) {
      console.log(`Element marked for tracking:`);

      // Show click indicator at the click position
      // setClickIndicator({ x: event.clientX, y: event.clientY });

      // Check if the element is already in the selectedElements array
      const existingElementIndex = selectedElements.findIndex(
        (element) => element.type === elementType && element.label === elementLabel
      );

      if (existingElementIndex !== -1) {
        // If the element exists, update the interaction count
        const updatedSelectedElements = [...selectedElements];
        updatedSelectedElements[existingElementIndex].interactionCount += 1;
        setSelectedElements(updatedSelectedElements);
      } else {
        // If the element doesn't exist, add it to the selectedElements array
        setSelectedElements((prevSelectedElements) => [
          ...prevSelectedElements,
          { type: elementType, label: elementLabel, interactionCount: 1 },
        ]);
      }

      // Hide the click indicator after a short delay
      setTimeout(() => {
        setClickIndicator(null);
      }, 1000);
    }
  };

  const mockGTMEndpoint = (eventType, element) => {
    console.log(`Simulating GTM event: ${eventType}`, element);
    // Simulate sending the event to GTM (you would replace this with actual GTM integration)
  };

  const handleButtonClick = () => {
    mockGTMEndpoint('button-click', selectedElements);
  };

  const handleLinkClick = () => {
    mockGTMEndpoint('link-click', selectedElements);
  };

  return (
    <div className="app-container">
      <div className='logo'>
        <img src={logoImage} alt="Logo" />
      </div>

      <div className='header'>
        <select className="dropdownMenu" onClick={() => handleElementClick('select', 'Dropdown Menu')}>
          <option value="" disabled selected>Select Option</option>
          <option value="option1">Subscribe</option>
          <option value="option2">Download</option>
          <option value="option3">ContactUs</option>
        </select>

        <button
          className="contactButton"
          onClick={() => {
            handleElementClick('button', 'Subscribe');
            handleButtonClick();
          }}
        >
          Subscribe
        </button>

        <button
          className="contactButton2"
          onClick={() => {
            handleElementClick('button', 'Download');
            handleButtonClick();
          }}
        >
          Download
        </button>

        <button
          className="contactButton3"
          onClick={() => {
            handleElementClick('button', 'Contact Us');
            handleButtonClick();
          }}
        >
          Contact Us
        </button>

        {/* Read More link button */}
        <a
          href="#read-more"
          className="readMoreButton"
          onClick={() => {
            handleElementClick('link', 'Read More');
            handleLinkClick();
          }}
        >
          Read More
        </a>

        <a
          href="#read-more"
          className="readMoreButton1"
          onClick={() => {
            handleElementClick('link', 'Visit Our Store');
            handleLinkClick();
          }}
        >
          Visit Our Store
        </a>
      </div>

      {/* Video section below the header */}
      <div className="video-section">
        <video controls width="100%" height="auto" >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Display the click indicator */}
      {clickIndicator && <ClickIndicator position={clickIndicator} />}

      {/* Toggle Selection Mode button */}
      <button className="toggleButton" onClick={handleToggleSelectionMode}>
        {selectionMode ? 'Exit Selection Mode' : 'Enter Selection Mode'}
      </button>

      {/* Display the Dashboard */}
      {selectionMode && <Dashboard selectedElements={selectedElements} />}
      
    </div>

  );
}

export default App;
