import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";



const AgentScreen = () => {
    const [deepSeekResponse, setDeepSeekResponse] = useState("");
    const [openAIResponse, setOpenAIResponse] = useState("");
    const [deepSeekLoading, setDeepSeekLoading] = useState(false); // loading state for DeepSeek
    const [openAILoading, setOpenAILoading] = useState(false); // loading state for OpenAI
    
    const navigate = useNavigate();

const handleNavigation = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "deepseek") {
        navigate("/write"); 
    } else if (selectedValue === "openai") {
        navigate("/"); 
    }
};

    const fetchDeepSeekResponse = async () => {
        setDeepSeekLoading(true);
        try {
            const res = await axios.post("http://localhost:5001/api/chat", {
                prompt: "Write me a short poem, a few words",
            });

            setDeepSeekResponse(res.data.choices[0].message.content);
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
            <select onChange={handleNavigation}>
                <option value=""> Select Agent</option>
                <option value={"deepseek"}> DeepSeek</option>
                <option>OpenAI</option>
                

            </select>
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
        </div>
    );
};

export default AgentScreen;
