import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Load chat-widget globally once
const chatScript = document.createElement("script");
chatScript.src = "/chat-widget.js";
chatScript.async = true;
document.body.appendChild(chatScript);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
