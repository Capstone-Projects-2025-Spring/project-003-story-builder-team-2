import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Agent from "../../../Classes/Agent";
import {
  createNewSession,
  
  generateChaptersForAgentsInParallel,
  callFakeVote
  
} from "../../../Controllers/sessionController.js";
import "./StoryCreationPage.css";
import "../AgentPopup/TestAgentPopup.css";
import AddAgent from "../AgentPopup/AddAgent.jsx";
import Evaluation from "../../Components/Evaluation/Evaluate.jsx";
import ReactMarkdown from "react-markdown";
import ChapterInfoPopup from "../../Components/ChapterInfoPopup.jsx";

//eval
const StoryCreation = () => {
  const [userInput, setUserInput] = useState("");
  const [prompt, setPrompt] = useState("Write a story about a computer science student who learns they have superpowers.");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAccuracyPopupVisible, setIsAccuracyPopupVisible] = useState(false); // State to control accuracy popup visibility
  const [accuracyResult, setAccuracyResult] = useState('');
  const [agents, setAgents] = useState([]);
  const [aiResponse, setAIResponse] = useState("");
  const [aiLoading, setAILoading] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [chapterCount, setChapterCount] = useState(0);
  const [chapterButtons, setChapterButtons] = useState([]);
  const [storyIdea, setStoryIdea] = useState("");
  const [lastUsedPrompt, setLastUsedPrompt] = useState("");
  const [phase, setPhase] = useState("generate");

  const [isChpPopupOpen, setIsChpPopupOpen] = useState(false);

  const textSocketRef = useRef(null);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleStartSession = () => {
    const user = ""; // you can later grab this from login context
    const prompt = userInput.trim() || "Write a story about a computer science student who learns they have superpowers.";
  
    createNewSession(user, prompt, agents, chapterCount);
    for (const agent of agents) {
      agent.setChapterCount(chapterCount);
    }
    
    setShowModal(false);
  };

  const cloneAgent = (originalAgent) => {
    const cloned = Object.create(Object.getPrototypeOf(originalAgent));
    return Object.assign(cloned, originalAgent);
  };
  

  const handleGenerateChapters = async () => {
    setPhase("loading");
  
    await generateChaptersForAgentsInParallel((agent, chapter) => {
      const updatedAgent = cloneAgent(agent);
      setAgents((prevAgents) =>
        prevAgents.map((a) =>
          a.persona === updatedAgent.persona ? updatedAgent : a
        )
      );
    });

    setPhase("vote");
  };
  

  const handleVoting = () => {
    const winningChapter = callFakeVote();
    if (winningChapter) {
      console.log('Winning chapter added:', winningChapter);
      // TODO: update UI state here if needed
    } else {
      console.log('No agents available to vote.');
    }
    setPhase("generate");
    setChapterIndex(chapterIndex+1);

  };
  
  

 /* const sendWriterPrompt = (prompt) => {
    const previousChapter = agents[0]?.chapterHistory.slice(-1)[0] || "";
  
    // For chapters after the first, use the last chapter as context
    const isContinuation = agents[0]?.chapterHistory.length > 0;
    const continuationPrompt = isContinuation
      ? `${prompt}\n\nContinue the story based on the previous chapter:\n"${previousChapter}"\nMake sure the story continues naturally.`
      : prompt;
  
    if (!continuationPrompt || !agents.length) return;
  
    setLastUsedPrompt(continuationPrompt);
    setAILoading(true);
    setAIResponse("");
  
    const textSocket = new WebSocket("ws://localhost:5001");
    textSocketRef.current = textSocket;
  
    textSocket.onopen = () => {
      textSocket.send(
        JSON.stringify({
          provider: "openai",
          persona: agents[0]?.persona,
          prompt: continuationPrompt,
          type: "writer",
        })
      );
  
      let streamedChapter = "";
  
      textSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
  
        if (data.type === "chunk") {
          streamedChapter += data.content;
          setAIResponse((prev) => prev + data.content);
        } else if (data.type === "done") {
          setAILoading(false);
  
          // Only push if the chapter is not a duplicate
          setAgents((prevAgents) => {
            const updated = [...prevAgents];
            if (updated.length > 0) {
              const last = updated[0].chapterHistory.slice(-1)[0];
              if (last !== streamedChapter.trim()) {
                updated[0].chapterHistory.push(streamedChapter.trim());
              }
            }
            console.log(data.content);
            return updated;
          });
  
          setUserInput(streamedChapter.trim());
          setChapterIndex((prev) => prev + 1);
        } else if (data.type === "error") {
          console.error("WebSocket error:", data.message);
          setAIResponse("An error occurred while generating the story.");
          setAILoading(false);
        }
      };
    };
  };*/
  
  
  

  /*const handleSubmit = () => {
    if (storyIdea.trim()) {
      sendWriterPrompt(storyIdea);
      setStoryIdea("");
    }
  };*/

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

      const goToChapter = (num) => {
        const maxIndex = agents[0]?.chapterHistory?.length;

        if (num >= 0 && num <= maxIndex) {
          console.log(`Switching to chapter ${num}`);
          setChapterIndex(num);
        } else {
          console.warn(`Chapter ${num} is out of bounds (max: ${num})`);
        }
        
      };

  const updateAgents = (newAgent) => {
    const nAgent = new Agent(newAgent.persona, newAgent.aiInstance);
    setAgents((prev) => [...prev, nAgent]);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const checkAccuracy = async (agent) => {
    try {
      const accuracyResponse = await agent.testAccuracy();
      console.log("Accuracy Evaluation for", agent.persona, ":", accuracyResponse);
      setAccuracyResult(`Accuracy for ${agent.persona}: ${accuracyResponse}`);
      setIsAccuracyPopupVisible(true); // Show the accuracy popup
    } catch (error) {
      console.error("Error checking accuracy:", error);
    }
  };

  const openChpPopup = () => {
    console.log("open phase info for: " + chapterIndex);
    setIsChpPopupOpen(true);
  };

  const closeChpPopup = () => {
    setIsChpPopupOpen(false);
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
                          <br />
                          {agent.chapterHistory[chapterIndex]}
                        </li>
                      ))
                    ) : (
                      <p>No agents have been added yet</p>
                    )}
                  </ul>
                </div>
              </div>

              <label htmlFor="quantity" className="chapter-number-label">Number of Chapters:</label>
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
                  const buttons = Array.from({ length: value+1 }, (_, i) => i );
                  setChapterButtons(buttons);
                }}
              />

              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Provide agents with key details required for the story. You can be as descriptive as you want"
              />
              <button className="start-session-button" onClick={handleStartSession}>
                Start Session
              </button>
            </div>
          </div>
        )}

        <button className="phase-box chapter-heading-button" onClick={() => openChpPopup()}>
          Chapter {chapterIndex}
        </button>

        {isChpPopupOpen && (
          <ChapterInfoPopup
            isOpen={isChpPopupOpen}
            onClose={closeChpPopup}
            index={chapterIndex}
          />
        )}


                <div className="arrows">
                            <button className="move-backward" onClick={() => goPreviousChapter()}>⬅</button>
                            <div className="chapter-button-list">
                                {chapterButtons.map((num) => (
                                    <button
                                    key={num}
                                    className="chapter-button"
                                    onClick={ () => goToChapter(num)}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>

                            <button className="move-forward" onClick={() => goNextChapter()}>➡</button>
                        </div>

        <h3>AI Agents Chat</h3>
        <ul className="agent-display-output">
          {agents.map((agent, index) => (
            <li key={index}>
              <button className="test-button" onClick={() => checkAccuracy(agent)}>Check Agent Accuracy</button>
              {isAccuracyPopupVisible && (
                  <div className="popup-overlay" onClick={() => setIsAccuracyPopupVisible(false)}>
                  <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                      <button className="close-button" onClick={() => setIsAccuracyPopupVisible(false)}>✕</button>
                      <h2>Agent Accuracy</h2>
                      <p className="accuracy-response">{accuracyResult}</p>
                  </div>
                   </div>
                                                          )}
              <strong>AI:</strong> {agent.aiInstance}
              <strong> &nbsp; Persona:</strong> {agent.persona}...
              <div className="markdown-output">
                <ReactMarkdown>{agent.chapterHistory[chapterIndex]}</ReactMarkdown>
              </div>
              {chapterIndex === agent.chapterHistory.length - 1 && aiResponse && (
                <div className="markdown-output streamed">
                  <ReactMarkdown>{aiResponse}</ReactMarkdown>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="user-box">User Info</div>

        <div className="agent-text-container">

          <div className="controls">

          {phase === "generate" && (
            <button onClick={handleGenerateChapters}>Generate Chapters</button>
          )}

          {phase === "vote" && (
            <button onClick={handleVoting}>Vote</button>
          )}

           {phase === "loading" && (
            <button>Loading...</button>
          )}


          </div>

        </div>

        <div className="evaluation-box">
          {agents.length > 0 && (
            <Evaluation aiLoading={agents[0].chapterHistory[chapterIndex]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCreation;
