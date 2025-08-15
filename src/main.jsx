import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/css/Variables.css'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
