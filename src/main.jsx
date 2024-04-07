import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* se encierra toda la pagina dentro de BrowserRouter, para lograr leer las rutas. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
