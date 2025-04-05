import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

export default function EvaluationComponent({ aiLoading }) {
  const [evaluation, setEvaluation] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const socketRef = useRef(null);

  const chapterEvaluation = () => {
    const socket = new WebSocket("ws://localhost:5001");
    socketRef.current = socket;

    setEvaluation("");         // Clear previous result
    setIsStreaming(true);      // Start loading
    setShowModal(true);        // Open modal

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          provider: "openai", // or "deepseek"
          prompt: aiLoading,
          type: "evaluate",
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "chunk") {
        setEvaluation((prev) => prev + data.content);
      } else if (data.type === "done") {
        setIsStreaming(false);
      } else if (data.type === "error") {
        console.error("WebSocket error:", data.message);
        setIsStreaming(false);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket connection error:", error);
      setIsStreaming(false);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };
  };

  const closeModal = () => {
    setShowModal(false);
    if (socketRef.current) {
      socketRef.current.close();
    }
    setEvaluation("");
    setIsStreaming(false);
  };

  return (
    <div>
      <button className="evaluation-button" onClick={chapterEvaluation}>
        Evaluate
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>Evaluation Result</h2>
            {isStreaming && <p><em>Evaluating...</em></p>}
            <ReactMarkdown>{evaluation}</ReactMarkdown>
          </div>
        </div>
      )}

      <style>{`
        .evaluation-button {
          padding: 10px 20px;
          font-size: 16px;
          background: #007bff;
          color: black;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 600px;
          width: 90%;
          position: relative;
          overflow-y: auto;
          max-height: 80vh;
          color: black;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
          color: black;
        }

        h2 {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}
