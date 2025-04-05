/* Imports:
 -Node/express - Our backend functions to be able to make API calls and other necessary backend tools
 CORS - allows our front-end to access by front-end applciations on different origins
 axios - similar to CORS allows react to access API requests
 dotenv - to use .env files for retrieving keys
 */

 import express from "express";
 import cors from "cors";
 import axios from "axios";
 import dotenv from "dotenv";
 import { OpenAI } from "openai";
 import Agent from "./Classes/Agent.js";
 import { WebSocketServer } from 'ws';
 
 dotenv.config(); // Load environment variables
 
 const app = express();
 const port = 5001;
 
 app.use(cors());
 app.use(express.json());
 
 app.get("/", (req, res) => {
     res.send("testing!");
 });
 
 app.post("/api/chat", async (req, res) => {
     const { prompt, persona } = req.body;
     const fullPrompt = "You are a helpful assitant that writes like " + persona + ". " + prompt;
 
     try {
         const response = await axios.post(
             "https://api.deepseek.com/v1/chat/completions",
             {
                 model: "deepseek-chat",
                 messages: [{ role: "user", content: fullPrompt }],
             },
             {
                 headers: {
                     "Content-Type": "application/json",
                     "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                 },
             }
         );
 
         console.log("deepseek: ", response.data);
         res.json(response.data);
     } catch (error) {
         console.error("DeepSeek API Error:", error.response?.data || error.message);
         res.status(500).json({ error: error.response?.data || error.message });
     }
 });
 
 const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY,
 });
 
 app.post('/api/openai', async (req, res) => {
     try {
         const { userPrompt, persona } = req.body;
         const systemPrompt = "You are a helpful assistant that writes like " + persona;
 
         const completion = await openai.chat.completions.create({
             model: "gpt-4o-mini",
             messages: [
                 { role: "system", content: systemPrompt },
                 { role: "user", content: userPrompt },
             ],
         });
 
         console.log("openai: ", completion.choices[0].message.content);
         res.json({ message: completion.choices[0].message.content });
     } catch (error) {
         console.error("Error fetching completion:", error);
         res.status(500).json({ error: 'Failed to fetch completion' });
     }
 });
 
 let agents = [];
 
 app.post('/api/agents', (req, res) => {
     const { persona, aiInstance } = req.body;
 
     if (!persona) {
         return res.status(400).json({ message: 'Persona is required' });
     }
 
     const newAgent = new Agent(persona, aiInstance);
     agents.push(newAgent);
 
     res.status(201).json({
         message: 'Agent created successfully',
         agent: newAgent,
     });
 });
 
 const server = app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
 });
 
 const wss = new WebSocketServer({ server });
 
 wss.on("connection", (ws) => {
     console.log("🌐 WebSocket client connected");
 
     ws.on("message", async (message) => {
         try {
             const { provider, prompt, persona = "", type = "default" } = JSON.parse(message);
 
             if (!provider || !prompt) {
                 return ws.send(JSON.stringify({ type: "error", message: "Missing provider or prompt" }));
             }
 
             if (provider === "openai") {
                 await handleOpenAIStream(ws, prompt, persona, type);
             } else if (provider === "deepseek") {
                 await handleDeepSeekFakeStream(ws, prompt, persona, type);
             } else {
                 ws.send(JSON.stringify({ type: "error", message: "Unknown provider" }));
             }
         } catch (err) {
             console.error("WebSocket error:", err);
             ws.send(JSON.stringify({ type: "error", message: err.message }));
         }
     });
 
     ws.on("close", () => {
         console.log("❌ WebSocket client disconnected");
     });
 });
 
 async function handleOpenAIStream(ws, prompt, persona, type) {
     const systemPrompt = persona
         ? `You are a helpful assistant that writes like ${persona}.`
         : "You are a helpful assistant.";
 
     const userPrompt =
         type === "evaluate"
             ? `Evaluate this chapter and return only a markdown-formatted evaluation with a rating from 1-5, exlcude any excess messages and only include the evaluation:\n\n${prompt}`
             : prompt;
 
     const completion = await openai.chat.completions.create({
         model: "gpt-4o-mini",
         messages: [
             { role: "system", content: systemPrompt },
             { role: "user", content: userPrompt },
         ],
         stream: true,
     });
 
     for await (const chunk of completion) {
         const content = chunk.choices?.[0]?.delta?.content;
         if (content) {
             ws.send(JSON.stringify({ type: "chunk", content }));
         }
     }
 
     ws.send(JSON.stringify({ type: "done" }));
 }
 
 async function handleDeepSeekFakeStream(ws, prompt, persona, type) {
     const fullPrompt = `You are a helpful assistant that writes like ${persona}. ${prompt}`;
 
     try {
         const response = await axios.post(
             "https://api.deepseek.com/v1/chat/completions",
             {
                 model: "deepseek-chat",
                 messages: [{ role: "user", content: fullPrompt }],
             },
             {
                 headers: {
                     "Content-Type": "application/json",
                     "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                 },
             }
         );
 
         const fullText = response.data.choices?.[0]?.message?.content || "No response";
 
         for (let i = 0; i < fullText.length; i++) {
             ws.send(JSON.stringify({ type: "chunk", content: fullText[i] }));
             await new Promise((res) => setTimeout(res, 10));
         }
 
         ws.send(JSON.stringify({ type: "done" }));
     } catch (error) {
         console.error("DeepSeek streaming error:", error);
         ws.send(JSON.stringify({ type: "error", message: error.message }));
     }
 }
 
 export { app, server };
 