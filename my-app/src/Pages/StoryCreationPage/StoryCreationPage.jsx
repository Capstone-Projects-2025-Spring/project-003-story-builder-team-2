import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Agent from "../../../Classes/Agent";
import {
  createNewSession,
  loadSessionFromLocalStorage,
  generateChaptersForAgentsInParallel,
  callFakeVote,
  getAgents
} from "../../../Controllers/sessionController.js";
import "./StoryCreationPage.css";
import AddAgent from "../AgentPopup/AddAgent.jsx";
import Evaluation from "../../Components/Evaluation/Evaluate.jsx";
import ReactMarkdown from "react-markdown";
import ChapterInfoPopup from "../../Components/ChapterInfoPopup.jsx";

//eval
const StoryCreation = () => {
  const [title, setTitle] = useState("");
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
  const [button, setButton] = useState("generate");
  const [phase, setPhase] = useState("generate");

  const [isChpPopupOpen, setIsChpPopupOpen] = useState(false);

  const textSocketRef = useRef(null);

  useEffect(() => {
    setShowModal(true);
    setAgents(getAgents());
  }, []);

  const handleStartSession = () => {
    const user = ""; // you can later grab this from login context
    const prompt = userInput.trim() || "Write a story about a computer science student who learns they have superpowers.";
  
    createNewSession(title, user, prompt, agents, chapterCount);
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
    if(phase === "vote" && button === "generate"){
      setChapterIndex((prev) => prev + 1);
    }
    setPhase("generate");
    setButton("loading");
  
    await generateChaptersForAgentsInParallel((agent, chapter) => {
      const updatedAgent = cloneAgent(agent);
      setAgents((prevAgents) =>
        prevAgents.map((a) =>
          a.persona === updatedAgent.persona ? updatedAgent : a
        )
      );
    });

    setButton("vote");
  };
  

  const handleVoting = async () => {
    setPhase("vote");
    setButton("loading");
  
    await callFakeVote((updatedAgent) => {
      const cloned = cloneAgent(updatedAgent);
      setAgents((prevAgents) =>
        prevAgents.map((a) =>
          a.persona === cloned.persona ? cloned : a
        )
      );
    });

    console.log(agents);
  
    setButton("generate");
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

        const updateAgents = () => {
            const freshAgents = [...getAgents()]; // 👈 Force a new array reference
            console.log("Updated Agents:", freshAgents);
            setAgents(freshAgents);
          
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

              {/* Title & Chapter Count */}
              <div className="title-chapter-row">
              <div className="title-input-container">
                <label>Title:</label>
                <textarea
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Title Here!"
                  className="title-input"
                />
                </div>

                <div className="chapter-input-group">
                  <label htmlFor="quantity" className="chapter-number-label">Chapters:</label>
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
                      const buttons = Array.from({ length: value+1 }, (_, i) => i);
                      setChapterButtons(buttons);
                    }}
                  />
                </div>
              </div>

              {/* Story Prompt */}
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter story details or setup..."
                className="story-details-textarea"
              />

              {/* Agent List Box */}
              <div className="agent-display improved-agent-box">
                <div className="agent-box-header">
                  <h3>AI Agents</h3>
                  <div className="add-agents">
                    <AddAgent isOpen={isPopupOpen} onClose={togglePopup} updateAgents={updateAgents}>
                      Add Agent
                    </AddAgent>
                  </div>
                </div>


                <ul>
                  {agents.length > 0 ? (
                    <div className="agent-strip-sc">
                    {agents.map((agent, index) => (
                      <div
                        key={index}
                        className="agent-box-sc"
                        onClick={() => setSelectedAgent(agent)}
                      >
                        <img
                          src={agent.profile?.picture || `https://api.dicebear.com/7.x/adventurer/svg?seed=${agent.persona}`}
                          alt={agent.persona}
                          className="agent-avatar-sc"
                        />
                        <span>{agent.persona}</span>
                      </div>
                    ))}
                  </div>
                  
                  ) : (
                    <p>No agents have been added yet</p>
                  )}
                </ul>
              </div>

              {/* Final CTA */}
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


                <div className="chapter-controls">
                    <button className="chapter-button" onClick={() => goPreviousChapter()}>⬅</button>
                      {chapterButtons.map((num) => (
                          <button
                                    key={num}
                                    className="chapter-button"
                                    onClick={ () => goToChapter(num)}
                                    >
                                        {num}
                                    </button>
                                ))}
                            <button className="chapter-button" onClick={() => goNextChapter()}>➡</button>
                        </div>

                        <div className="dialogue-container">
                          <div className="dialogue-layout">
                            {agents.map((agent, index) => {
                              const isLeft = index % 2 === 0;
                              return (
                                <div key={index} className="dialogue-row">
                                  {isLeft ? (
                                    <>
                                      <div className="agent-side left">
                                        <img
                                          className="agent-avatar"
                                          src={agent.profile?.picture || `https://api.dicebear.com/7.x/adventurer/svg?seed=${agent.persona}`}
                                          alt={agent.persona}
                                        />
                                        <div className="speech-bubble left">
                                        <strong>{agent.persona}</strong>
                                        {phase === "generate" && (
                                          <ReactMarkdown>
                                          {typeof agent.chapterHistory?.[chapterIndex] === "string"
                                            ? agent.chapterHistory[chapterIndex]
                                            : "*...*"}
                                        </ReactMarkdown>
                                        
                                        )}

                                        {phase === "vote" && (
                                          <ReactMarkdown>
                                          {typeof agent.votingReasoning?.[chapterIndex] === "string"
                                            ? agent.votingReasoning[chapterIndex]
                                            : "*...*"}
                                        </ReactMarkdown>
                                        
                                        )}
                                        </div>
                                      </div>
                                      <div className="agent-side right empty" />
                                    </>
                                  ) : (
                                    <>
                                      <div className="agent-side left empty" />
                                      <div className="agent-side right">
                                        <div className="speech-bubble right">
                                          <strong>{agent.persona}</strong>

                                          {phase === "generate" && (
                                            <ReactMarkdown>
                                            {typeof agent.chapterHistory?.[chapterIndex] === "string"
                                            ? agent.chapterHistory[chapterIndex]
                                            : "*...*"}
                                          </ReactMarkdown>
                                          
                                          )}

                                          {phase === "vote" && (
                                            <ReactMarkdown>
                                            {typeof agent.votingReasoning?.[chapterIndex] === "string"
                                            ? agent.votingReasoning[chapterIndex]
                                              : "*...*"}
                                          </ReactMarkdown>
                                          
                                          )}

                                        </div>
                                        <img
                                          className="agent-avatar"
                                          src={agent.profile?.picture || `https://api.dicebear.com/7.x/adventurer/svg?seed=${agent.persona}`}
                                          alt={agent.persona}
                                        />
                                      </div>
                                    </>
                                  )}
                                </div>
                              );
                            })}
                          </div>

  {isAccuracyPopupVisible && (
    <div className="popup-overlay" onClick={() => setIsAccuracyPopupVisible(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={() => setIsAccuracyPopupVisible(false)}>✕</button>
        <h2>Agent Accuracy</h2>
        <p className="accuracy-response">{accuracyResult}</p>
      </div>
    </div>
  )}
</div>


        <div className="user-box">User Info</div>

        <div className="agent-text-container">

          <div className="controls">

          {button === "generate" && (
            <button onClick={handleGenerateChapters}>Generate Chapters</button>
          )}

          {button === "vote" && (
            <button onClick={handleVoting}>Vote</button>
          )}

           {button === "loading" && (
            <button>Loading...</button>
          )}


          </div>

        </div>
      </div>
    </div>
  );
};

export default StoryCreation;
