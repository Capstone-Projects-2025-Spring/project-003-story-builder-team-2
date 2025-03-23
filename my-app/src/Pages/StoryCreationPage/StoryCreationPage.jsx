import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Agent from "../../../Classes/Agent"
import "./StoryCreationPage.css";
import AddAgent from "../../Components/AddAgent.jsx"


const StoryCreation = () => {
    /*const [userInput, setUserInput] = useState("");
    const [generatedChapter, setGeneratedChapter] = useState("");
    const [loading, setLoading] = useState(false);*/

    const [isPopupOpen, setIsPopupOpen] = useState(false);  // State to control popup visibility
    const [agents, setAgents] = useState([]);
    const [aiResponse, setAIResponse] = useState("");
    const [aiLoading, setAILoading] = useState(false); // loading state for DeepSeek

    const generateAIResponse = async () => {
        setAILoading(true);
        try {
             for (const agent of agents){
                await agent.generateChapter("Write a story about a computer science student who learns they have superpowers.");
                console.log(agent);
             }
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setAIResponse("An error occurred while fetching the response.");
        } finally {
            setAILoading(false);
        }
    };

    // Function to update the list of agents after adding a new agent
    const updateAgents = (newAgent) => {
        const nAgent = new Agent(newAgent.persona, newAgent.aiInstance);
        setAgents((prevAgents) => [...prevAgents, nAgent]);  // Add the new agent to the existing list
        console.log("Front end recieved: ", nAgent);
    };

    // Toggle the popup visibility
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const checkAccuracy = async (agent) => {
        try{
            const accuracyResponse = await agent.testAccuracy();
            console.log("Accuracy Evaluation for", agent.persona, ":", accuracyResponse);
        alert(`Accuracy for ${agent.persona}: ${accuracyResponse}`);
        }catch (error){
            console.error("Error checking accuracy:", error);
        }
    };

    //Function to generate chapter
    const handleGenerateChapter = async () => {
        if (!prompt.trim()) {
          alert("Please enter a prompt before generating a chapter.");
          return;
        }

        try {
          const chapter = await generateChapter(prompt); // Call the function passed as a prop
          setGeneratedChapter(chapter);
        } catch (error) {
          alert("Failed to generate chapter. Please try again.");
        }
    };


    return (
        <div className="story-create-page">
            <div className="black-board">
                <div className="phase-box">Phase 1</div>

                <div className="agent-text-container">
                    <textarea placeholder="Provide agents with key details required for the story. You can be as descriptive as you want"></textarea>
                    <div className="controls">
                        <button className="generate-chapter" onClick={generateAIResponse} disabled={aiLoading}>
                            {aiLoading ? "Generating..." : "Generate Chapter"}
                        </button>
            
                        <div className="arrows">
                            <button className="move-backward">⬅</button>
                            <button className="move-forward">➡</button>
                        </div>
                    </div>
                </div>

                <div className="user-box">User Info</div>
                <div className="add-agents">
                    <AddAgent isOpen={isPopupOpen} onClose={togglePopup} updateAgents={updateAgents}>
                                    <h2>Add Agent</h2>
                    </AddAgent>
                            
                </div>
                <div className="agent-display">
                                    <h3>AI Agents List</h3>
                                    <ul>
                                        {agents.length > 0 ? (
                                            agents.map((agent, index) => (
                                                <li key={index}>
                                                    <button className="test-button" onClick={() => checkAccuracy(agent)}>Check Agent Accuracy</button>
                                                    <strong>AI:</strong> {agent.aiInstance}
                                                    <strong> &nbsp; Persona:</strong> {agent.persona}... 
                                                    <br></br>{agent.chapter}
                                                </li>
                    
                                            ))
                                        ) : (
                                            <p>No agents available</p>
                                        )}
                                    </ul> 
                                </div>
            </div>
        
        </div>
    );
};

export default StoryCreation;