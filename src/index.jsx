import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import custom hook provider
import { UserProvider } from './context/UserContext'

ReactDOM.render(
  <React.StrictMode>
    {/* nest the necessary components inside of our provider so that decendants can access and manipulate the state */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
