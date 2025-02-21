const axios = require("axios");

const runPrompt = async () => {
    const prompt = "Write me a short poem, a few words";

    try {
        const response = await axios.post(
            "https://api.deepseek.com/v1/completions",  // Replace with the correct DeepSeek API URL
            {
                model: "deepseek-chat", // Ensure you're using the correct DeepSeek model
                prompt: prompt,
                max_tokens: 150,
                temperature: 1
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer YOUR_DEEPSEEK_API_KEY`  // Replace with your actual API key
                }
            }
        );

        console.log(response.data);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
};

runPrompt();
