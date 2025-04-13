// ChapterInfoPopup.jsx
import React from "react";
import "./ChapterInfoPopup.css"; // create styling separately
import {getPhase} from "../../Controllers/sessionController"

const ChapterInfoPopup = ({ isOpen, onClose, index}) => {
  if (!isOpen) return null;

  const phase = getPhase(index);
  if (!phase) return null;

  return (
    <div className="chapter-popup-overlay">
      <div className="chapter-popup">
        <button className="close-button" onClick={onClose}>✕</button>

        <h2>Chapter {phase.number}</h2>
        <p><strong>Title:</strong> {phase.title}</p>
        <p>
          <strong>Agent Winner:</strong>{" "}
          {phase.winner ? (
            <span className="winner-name">{phase.winner?.persona || "TBD"}</span>
          ) : (
            <em>Not yet voted</em>
          )}
        </p>
        <p><strong>Related Outline:</strong></p>
        <p className="outline-text">{phase.outlineSnippet}</p>
        <p><strong>Chapter Text:</strong></p>
        <p className="chapter-text">{phase.text}</p>
      </div>
    </div>
  );
};

export default ChapterInfoPopup;