import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Welcome from './Welcome'
import HomePage from './Page/HomePage'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Welcome /> */}
    <HomePage />
  </StrictMode>,
)
