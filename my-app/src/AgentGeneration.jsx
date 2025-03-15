import React, { useState } from "react";
import axios from "axios";
import { db } from "../firebase.js"

function AgentGeneration() {
    
    const [userInput, setUserInput] = useState("");
        // our user text string for inputs
    const [deepSeekResponse, setDeepSeekResponse] = useState("");
        //the output we retrieve from deepSeek
    const [deepSeekLoading, setDeepSeekLoading] = useState(false);

    const globalPrompt = "Write in a similar manner to the Author J.K. Rowling. "; 
        //The authors we plan to use will enable global prompts, This is just a test prompt.

    const fetchDeepSeekResponse = async () => {
        if (!userInput.trim()) return; // Prevent empty requests

        setDeepSeekLoading(true);
        try {
            const res = await axios.post("http://localhost:5001/api/chat", {
                prompt: globalPrompt + userInput, // Append user input to the global prompt
            });

            setDeepSeekResponse(res.data.choices[0].message.content);
            // setting the deepseek output to the one retrieved from the API call
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setDeepSeekResponse("An error occurred while fetching the response.");
        } finally {
            setDeepSeekLoading(false);
        }
    };

    const fireAdd = async () => {

    };

    return (
        <div>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                    //setting the text to our input to be ingested byt the API
                placeholder="Type a message..."
            />
            <button onClick={fetchDeepSeekResponse} disabled={deepSeekLoading}>
                {deepSeekLoading ? "Loading..." : "Send"}
            </button>
            <div>
                <h3>Output:</h3>
                <p>{deepSeekResponse}</p>
            </div>
        </div>
    );
}

export default AgentGeneration;
