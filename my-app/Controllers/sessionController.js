// controllers/sessionController.js

import Session from "../Classes/session";
import Agent from "../Classes/Agent";
import { db } from "../firebase"; // adjust path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore"; // removed unused setDoc, doc

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
export const getSessionAgents = () => currentSession?.getAgents() || [];

// Get phase by index
export const getPhase = (index) => {
  if (!currentSession?.phases?.[index]) return null;
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

// Generate chapters (outline or chapter body) for all agents in parallel
export const generateChaptersForAgentsInParallel = async (onProgress) => {
  if (!currentSession?.agents) return;

  await Promise.all(currentSession.agents.map(async (agent) => {
    try {
      const chapter = currentSession.currentChapter === 0
        ? await agent.generateOutline(currentSession.prompt)
        : await agent.generateChapter(currentSession.story.outline, currentSession.story.chapters[currentSession.currentChapter]);

      if (typeof onProgress === "function") {
        onProgress(agent, chapter);
      }
    } catch (error) {
      console.error(`Error generating chapter for ${agent.persona}:`, error);
      if (typeof onProgress === "function") {
        onProgress(agent, "⚠️ Error generating chapter");
      }
    }
  }));
};

// Fake vote function
export const callFakeVote = () => {
  return currentSession?.fakeVote();
};

// Save session to Firebase Firestore
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
