import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import WhatsAppButton from './components/Whatsapp/Whatsapp.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
      <WhatsAppButton />
    </StrictMode>
)