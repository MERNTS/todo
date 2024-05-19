//v1. https://dev.to/misszamzam/a-simple-todo-list-app-with-react-1bj3
//v2. https://www.educative.io/blog/react-hooks-tutorial-todo-list

import React from 'react'                // React allows you to create reusable UI components, 
import ReactDOM from 'react-dom/client'  // ReactDOM is responsible for rendering those components into the browser.
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
