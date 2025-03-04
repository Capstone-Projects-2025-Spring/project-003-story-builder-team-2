import React, { useState } from 'react';
import './AddAgent.css';

const AddAgent = ({ children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const addAgent = () => {
    //addagent to session here 
    setIsOpen(!isOpen);
  }

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

  // Function to handle when an option is selected
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  
    return (
      <div className="popup-container">
      <button className="popup-button" onClick={togglePopup}>
        {children}
      </button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>
              &times;
            </button>

            <div className="AgentSettings">
              <h2>Add an Agent</h2>

              <div className="dropdown-container">
                <label className="dropdown-label"> </label>
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="dropdown-select"
                >
                  <option value="" disabled>Select a Persona</option>
                  {options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <button className="add-agent-button" onClick={addAgent}>
                  Add
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default AddAgent;
