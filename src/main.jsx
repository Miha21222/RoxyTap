import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider } from './context/ConfigContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider>
      <BrowserRouter basename='/tg-app-front/'>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
