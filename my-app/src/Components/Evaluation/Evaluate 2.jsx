import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Evalbar from "../Evaluation/EvaluationBar.jsx";

export default function EvaluationComponent({ aiLoading }) {
  const [evaluation, setEvaluation] = useState("");
  const [numberEval, setNumberEval] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const textSocketRef = useRef(null);
  const numberSocketRef = useRef(null);

  const chapterEvaluation = () => {
    // 1. Set up UI state
    setEvaluation("");
    setNumberEval(0);
    setIsStreaming(true);
    setShowModal(true);

    // 2. TEXT WebSocket (for markdown explanation)
    const textSocket = new WebSocket("ws://localhost:5001");
    textSocketRef.current = textSocket;

    textSocket.onopen = () => {
      textSocket.send(
        JSON.stringify({
          provider: "openai",
          prompt: aiLoading,
          type: "evaluate",
        })
      );
    };

    textSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "chunk") {
        setEvaluation((prev) => prev + data.content);
      } else if (data.type === "done") {
        setIsStreaming(false);
      }
    };

    textSocket.onerror = (error) => {
      console.error("Text WebSocket error:", error);
      setIsStreaming(false);
    };

    textSocket.onclose = () => {
      console.log("Text WebSocket closed");
    };

    // 3. NUMBER WebSocket (for Evalbar score)
    const numberSocket = new WebSocket("ws://localhost:5001");
    numberSocketRef.current = numberSocket;

    numberSocket.onopen = () => {
      numberSocket.send(
        JSON.stringify({
          provider: "openai",
          prompt: "Give a number between 0 and 100 that reflects the quality of this chapter.",
          type: "numberEval",
        })
      );
    };

    numberSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Raw numberEval data:", data); 
      if (data.type === "numberEval") {
        const numericValue = parseInt(data.content.match(/\d+/)?.[0]) || 0;
        setNumberEval(numericValue);
      }
    };

    numberSocket.onerror = (error) => {
      console.error("Number WebSocket error:", error);
    };

    numberSocket.onclose = () => {
      console.log("Number WebSocket closed");
    };
  };

  const closeModal = () => {
    setShowModal(false);
    setIsStreaming(false);
    setEvaluation("");
    setNumberEval(0);

    if (textSocketRef.current) textSocketRef.current.close();
    if (numberSocketRef.current) numberSocketRef.current.close();
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

            <h2></h2>
            {isStreaming && <p><em>Evaluating...</em></p>}

            <div className="markdown-output">
              <ReactMarkdown>{evaluation}</ReactMarkdown>
            </div>

            <div className="evaluation-percent">
              <h3></h3>
              <Evalbar number={numberEval} />

            </div>
          </div>
        </div>
      )}

      <style>{`
        .evaluation-button {
          padding: 10px 20px;
          font-size: 16px;
          background: #eef485;
          color: black;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .evaluation-percent {
          color: black;
          margin-top: 20px;
        }

        .markdown-output {
          margin-top: 10px;
          color: black;
          font-size: 14px;
          line-height: 1.6;
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
          background: #424035;
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

        h2, h3 {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}
