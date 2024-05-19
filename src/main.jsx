//v1. https://dev.to/misszamzam/a-simple-todo-list-app-with-react-1bj3

import React from 'react'                // React allows you to create reusable UI components, 
import ReactDOM from 'react-dom/client'  // ReactDOM is responsible for rendering those components into the browser.
import TodoList from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
)
