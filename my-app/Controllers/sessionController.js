// controllers/sessionController.js

import Session from "../Classes/Session";
import Agent from "../Classes/Agent";
import { db } from "../firebase"; // adjust path if needed
import { collection, addDoc, setDoc, doc, Timestamp } from "firebase/firestore";


let currentSession = null;

// Create a new session instance
export const createNewSession = (user, prompt, agents = [], numberOfChapters) => {
  currentSession = new Session(user, prompt, agents, numberOfChapters);
  saveSessionToLocalStorage();
  return currentSession;
};

// Get current session instance
export const getCurrentSession = () => currentSession;


// Get all agents in session
export const getSessionAgents = () => {
  return currentSession?.getAgents() || [];
};

export const getPhase = (index) => {
    console.log(currentSession.phases);
    if (!currentSession || !currentSession.phases || !currentSession.phases[index]) {
      return null;
    }

    return currentSession.phases[index];
  };
  

// Persist to localStorage
export const saveSessionToLocalStorage = () => {
  if (currentSession) {
    const sessionData = currentSession.toJSON();
    localStorage.setItem("session", JSON.stringify(sessionData));
  }
};

// Load from localStorage
export const loadSessionFromLocalStorage = () => {
  const data = localStorage.getItem("session");
  if (!data) return null;

  const parsed = JSON.parse(data);
  const loadedSession = new Session();
  loadedSession.fromJSON(parsed);
  currentSession = loadedSession;
  return currentSession;
};

// Reset session
export const resetSession = () => {
  currentSession = null;
  localStorage.removeItem("session");
};

export const generateChaptersForAgentsInParallel = async (onProgress) => {
    currentSession.agents.forEach(async (agent) => {
        if(currentSession.currentChapter == 0){
            try {
                const chapter = await agent.generateOutline(currentSession.prompt);
                if (typeof onProgress === "function") {
                onProgress(agent, chapter);
                }
            } catch (error) {
                console.error(`Error generating chapter for ${agent.persona}:`, error);
                if (typeof onProgress === "function") {
                onProgress(agent, "⚠️ Error generating chapter");
                }
            }
        }else{
            try {
                const chapter = await agent.generateChapter(currentSession.story.outline, currentSession.story.chapters[currentSession.currentChapter]); 
                if (typeof onProgress === "function") {
                onProgress(agent, chapter);
                }
            } catch (error) {
                console.error(`Error generating chapter for ${agent.persona}:`, error);
                if (typeof onProgress === "function") {
                onProgress(agent, "⚠️ Error generating chapter");
                }
            }
        }
    });
  
    // Save once all are updated (optional — or save individually in onProgress)
  };

export const callFakeVote = () => {
    return(currentSession.fakeVote());
};


//firebase stuff 

export const saveSessionToFirebase = async () => {
    if (!currentSession) return;
  
    const sessionData = currentSession.toJSON();
  
    try {
      const docRef = await addDoc(collection(db, "sessions"), {
        ...sessionData,
        createdAt: Timestamp.now(),
      });
  
      console.log("Session saved to Firebase with ID:", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error saving session to Firebase:", e);
    }
  };
  
