import React, { useState } from "react";
import axios from "axios";
import AddAgent from './AddAgent.jsx'

const AgentScreen = () => {
    const [deepSeekResponse, setDeepSeekResponse] = useState("");
    const [openAIResponse, setOpenAIResponse] = useState("");
    const [deepSeekLoading, setDeepSeekLoading] = useState(false); // loading state for DeepSeek
    const [openAILoading, setOpenAILoading] = useState(false); // loading state for OpenAI
    const [isPopupOpen, setIsPopupOpen] = useState(false);  // State to control popup visibility

    // Toggle the popup visibility
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const fetchDeepSeekResponse = async () => {
        setDeepSeekLoading(true);
        try {
            const res = await axios.post("http://localhost:5001/api/chat", {
                prompt: "Write me a short poem, a few words",
            });

            setDeepSeekResponse(res.data.choices[0].text);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setDeepSeekResponse("An error occurred while fetching the response.");
        } finally {
            setDeepSeekLoading(false);
        }
    };

    const fetchOpenAIResponse = async () => {
        setOpenAILoading(true);
        try {
            const res = await axios.post("http://localhost:5001/api/openai", {
                prompt: "Write me an 8 word poem.",
            });

            setOpenAIResponse(res.data.message);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setOpenAIResponse("An error occurred while fetching the response.");
        } finally {
            setOpenAILoading(false);
        }
    };

    return (
        <div>
            <h2>DeepSeek AI Chat</h2>
            <button onClick={fetchDeepSeekResponse} disabled={deepSeekLoading}>
                {deepSeekLoading ? "Generating..." : "Generate Response"}
            </button>
            {deepSeekResponse && <p><strong>Response:</strong> {deepSeekResponse}</p>}
     
            <br></br>
 
            <h2>OpenAI AI Chat</h2>
            <button onClick={fetchOpenAIResponse} disabled={openAILoading}>
                {openAILoading ? "Generating..." : "Generate Response"}
            </button>
            {openAIResponse && <p><strong>Response:</strong> {openAIResponse}</p>}

            {/* The Popup component */}
            <AddAgent isOpen={isPopupOpen} onClose={togglePopup}>
                <h2>Add Agent</h2>
            </AddAgent>
            
        </div>
    );
};

export default AgentScreen;
