import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthProvider>
       <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)

//this file is the entry point of the frontend application. It imports necessary dependencies, including React, ReactDOM, BrowserRouter for routing, and the main App component. It also imports the AuthProvider from the context/AuthContext.jsx file to provide authentication context to the entire application. The ReactDOM.createRoot method is used to render the application into the root element of the HTML document. The application is wrapped in React.StrictMode for highlighting potential problems in the application.
