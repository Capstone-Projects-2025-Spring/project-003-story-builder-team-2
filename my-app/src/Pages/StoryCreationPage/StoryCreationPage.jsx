import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Agent from "../../../Classes/Agent"
import "./StoryCreationPage.css";
import AddAgent from "../AgentPopup/AddAgent.jsx"
import Evaluation from "../../Components/Evaluation/Evaluate.jsx"

const StoryCreation = () => {
    const [userInput, setUserInput] = useState("");
    const [prompt, setPrompt] = useState("Write a story about a computer science student who learns they have superpowers.");
    const [generatedChapter, setGeneratedChapter] = useState("");
    //const [loading, setLoading] = useState(false);
    //const [isChapterGenerated, setIsChapterGenerated] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);  // State to control popup visibility
    const [agents, setAgents] = useState([]);
    const [aiResponse, setAIResponse] = useState("");
    const [aiLoading, setAILoading] = useState(false); // loading state for DeepSeek
    const [chapterIndex, setChapterIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const [chapterCount, setChapterCount] = useState(0);  // Number input
    const [chapterButtons, setChapterButtons] = useState([]); // List of buttons
    const [evaluation, setEvaluation] = useState("");



    useEffect(() => {
      // Show the modal right after the page loads
      setShowModal(true);
    }, []);
  
    const closeModal = () => {
      setShowModal(false);
    };

    useEffect(() => {
        //if (!isChapterGenerated)
        setPrompt(userInput.trim() ? userInput : "Write a story about a computer science student who learns they have superpowers.");
    }, [userInput]); //[userInput, isChapterGenerated]);

    const generateAIResponse = async () => {
        setAILoading(true);
        console.log("User Input:", userInput);
        console.log("Prompt Used:", prompt);

        setChapterIndex(agents[0].chapterCount);
        try {
             for (const agent of agents){
                await agent.generateChapter(prompt);
                console.log(agent);
             }
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setAIResponse("An error occurred while fetching the response.");
        } finally {
            setAILoading(false);
            //setIsChapterGenerated(true);
        }
    };

    const goPreviousChapter = () => {
        if (chapterIndex > 0) {
          setChapterIndex(chapterIndex - 1);
        }
      };
    
      // Function to handle "Next" button click
      const goNextChapter = () => {
        if (chapterIndex < agents[0].chapterHistory.length - 1) {
          setChapterIndex(chapterIndex + 1);
        }
      };

      const goToChapter = (chapter) => {
        if (chapter <= agents[0].chapterHistory.length - 1 ) {
          setChapterIndex(chapter);
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

    const handleChapterClick = () => {
        console.log(`Clicked Chapter ${chapterIndex + 1}`);
        // Open modal with info on chapter
      };

     

      

    return (
        <div className="story-create-page">

            <div className="black-board">

            {showModal && (
                <div className="modal-overlay">
                <div className="modal-box">
                    <h2>Welcome to Story Builder!</h2>
                    <p>Let’s get started on your new story.</p>
                    <div className="agent-settings">
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
                                            <strong>AI:</strong> {agent.aiInstance}
                                            <strong> &nbsp; Persona:</strong> {agent.persona}... 
                                            <br></br>{agent.chapterHistory[chapterIndex]}
                                        </li>
                        
                                    ))
                                ) : (
                                    <p>No agents have been added yet</p>
                                )}
                                </ul> 
                        </div>
                    </div>

                    <label for="quantity" class="chapter-number-label">Number of Chapters:</label>
                    <input
                        className="chapter-number-input"
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="15"
                        value={chapterCount}
                        onChange={(e) => {
                            const value = parseInt(e.target.value) || 1;
                            setChapterCount(value);
                        
                            // Generate an array of numbers [1, 2, ..., value]
                            const buttons = Array.from({ length: value }, (_, i) => i + 1);
                            setChapterButtons(buttons);
                          }}
                    />


                    <textarea value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Provide agents with key details required for the story. You can be as descriptive as you want" /*disabled={isChapterGenerated}*/></textarea>
                    <br></br>

                    
                    <button onClick={closeModal}>Start</button>
                </div>
                </div>
            )}

                <button className="phase-box chapter-heading-button" onClick={handleChapterClick}>
                Chapter {chapterIndex + 1}
                </button>


                <div className="arrows">
                            <button className="move-backward" onClick={() => goPreviousChapter()}>⬅</button>
                            <div className="chapter-button-list">
                                {chapterButtons.map((num) => (
                                    <button
                                    key={num}
                                    className="chapter-button"
                                    onClick={goToChapter}
                                    >
                                    </button>
                                ))}
                            </div>

                            <button className="move-forward" onClick={() => goNextChapter()}>➡</button>
                        </div>



                <h3>AI Agents Chat</h3>

                <div className="agent-display-output">
                                <ul>
                                {agents.length > 0 ? (
                                    agents.map((agent, index) => (
                                        <li key={index}>
                                            <button className="test-button" onClick={() => checkAccuracy(agent)}>Check Agent Accuracy</button>
                                            <strong>AI:</strong> {agent.aiInstance}
                                            <strong> &nbsp; Persona:</strong> {agent.persona}... 
                                            <br></br>{agent.chapterHistory[chapterIndex]}
                                        </li>
                        
                                    ))
                                ) : (
                                    <p>No agents have been added yet</p>
                                )}
                                </ul> 
                        </div>

                <div className="user-box">User Info</div>

                <div className="agent-text-container">
                    <div className="controls">
                        <button className="generate-chapter" onClick={generateAIResponse} disabled={aiLoading}>
                            {aiLoading ? "Generating..." : "Generate Chapter"}
                        </button>
                    </div>
                </div>
                <div className="evaluation-box">
                    {agents.length > 0 && (
                    <Evaluation
                            aiLoading={agents[0].chapterHistory[chapterIndex]} // or pass the selected agent
                                 />
                                        )}
                </div>
                
                
            </div>
        
        </div>
    );
};

export default StoryCreation;