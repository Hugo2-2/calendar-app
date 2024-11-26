import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CalendarApp } from './CalendarApp.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <CalendarApp />
    </BrowserRouter>
  </StrictMode>,
)
