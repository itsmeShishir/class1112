import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routes/MyRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>,
)
