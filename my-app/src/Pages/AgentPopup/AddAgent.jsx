import React, { useState } from 'react';
import PropTypes from 'prop-types'; // For prop validation
import './AddAgent.css';
import axios from "axios";
import { getAuth } from "firebase/auth";
import { saveAgentToFirebase } from "../../../Controllers/sessionController.js";
import { addAgentToSession } from "../../../Controllers/sessionController"; 



const AddAgent = ({ children, updateAgents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAI, setSelectedAI] = useState("");
  const [userInput, setUserInput] = useState("");
        // our user text string for inputs
  const [deepSeekResponse, setDeepSeekResponse] = useState("");
        //the output we retrieve from deepSeek
  const [deepSeekLoading, setDeepSeekLoading] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const addAgent = () => {
    if (!selectedOption || !selectedAI) {
      alert("Please select both a persona and an AI.");
      return;
    }
  
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("User not authenticated.");
      return;
    }

    const newAgent = addAgentToSession(selectedOption, selectedAI); //
    saveAgentToFirebase(selectedOption, selectedAI, user.uid) // saves agent to the database
    
    updateAgents(); // still tells React to refresh its copy
    setSelectedOption("");
    setSelectedAI("");
    setIsOpen(false);
  };

  const options = [
    { value: 'Dr. Suess', label: 'Dr. Suess' },
    { value: 'Shakespeare', label: 'Shakespeare' },
    { value: 'Stephen King', label: 'Stephen King' },
  ];

  // Function to handle when an option is selected
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAIChange = (e) => {
    setSelectedAI(e.target.value);
  }

  return (
    <div className="popup-container">
      <button className="popup-button" onClick={togglePopup}>
        {children}
      </button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>
              x
            </button>

            <div className="agent-settings">
                <h2>Add an Agent</h2>
                <div className="dropdown-container">
                    <label className="dropdown-label">Persona:</label>
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
            
                <div className="dropdown-container">
                    <label className="dropdown-label">AI:</label>
                    <select
                    value={selectedAI}
                    onChange={handleAIChange}
                    className="dropdown-select"
                    >
                    <option value=""> Select an AI</option>
                    <option value={"deepseek"}> DeepSeek</option>
                    <option value={"openai"}>OpenAI</option>
                    

                    </select>
                </div>
                {/*
                <div>
                <input className='textBar'
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                    //setting the text to our input to be ingested byt the API
                placeholder="Type a message..."
            />
                </div>
                */}
            </div>
                  
             
               <button className="add-agent-button" onClick={() => { addAgent()}} disabled={deepSeekLoading}>
                {deepSeekLoading ? "Loading..." : "Add"}
              </button>
            

          </div>
          
        </div>
      )}
    </div>
  );
};

// Prop validation (Optional but good practice)
AddAgent.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is passed correctly
};

export default AddAgent;
