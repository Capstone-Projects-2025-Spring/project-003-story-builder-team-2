import React, { useState, useEffect } from "react";

const EvaluationBar = ({ number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log("Received number in EvalBar:", number);
    
    const timeout = setTimeout(() => {
      setProgress(number);
    }, 100);
    return () => clearTimeout(timeout);
  }, [number]);

  const getColor = () => {
    if (progress === 0) return "#cccccc";       // Light gray for default
    if (progress < 40) return "#ff0000";         // Red
    else if (progress < 70) return "#ffa500";    // Orange
    else return "#2ecc71";                       // Green
  };

  return (
    <>
      <div className="container">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{
              width: `${progress}%`,
              backgroundColor: getColor(),
            }}
          >
            {progress > 0 ? (
              <span className="progress-label">{progress}%</span>
            ) : (
              <span className="progress-label faint">Waiting...</span>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .container {
          width: 100%;
          max-width: 400px;
          margin-top: 10px;
        }

        .progress-bar {
          width: 100%;
          height: 30px;
          background-color: #e6e6e6;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 14px;
          border-radius: 10px;
          transition: width 1s ease-out, background-color 0.3s ease;
        }

        .progress-label.faint {
          color: #555;
          font-weight: normal;
          font-style: italic;
        }
      `}</style>
    </>
  );
};

export default EvaluationBar;
