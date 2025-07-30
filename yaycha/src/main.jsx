import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TheamedApp from './ThemedApp.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TheamedApp />
    </StrictMode>,
)
