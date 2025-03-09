import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import "./index.css";
import App from "./App.jsx";
import AgentScreen from "./AgentScreen.jsx";
import NewHome from "./NewHome.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router> {/* Wrap your app with BrowserRouter */}
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<NewHome/>} /> {/* Home page */}
        <Route path="/agent" element={<AgentScreen/>} /> {/* AgentScreen page */}
      </Routes>
    </Router>
  </StrictMode>
);