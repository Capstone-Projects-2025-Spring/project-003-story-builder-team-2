import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AgentScreen from './assets/AgentScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgentScreen />
  </StrictMode>,
)
