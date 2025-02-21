import React, { useState } from "react";
import axios from "axios";

const AgentScreen = () => {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchResponse = async () => {
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5001/api/chat", {
                prompt: "Write me a short poem, a few words",
            });

            setResponse(res.data.choices[0].text);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setResponse("An error occurred while fetching the response.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>DeepSeek AI Chat</h2>
            <button onClick={fetchResponse} disabled={loading}>
                {loading ? "Generating..." : "Generate Response"}
            </button>
            {response && <p><strong>Response:</strong> {response}</p>}
        </div>
    );
};

export default AgentScreen;
