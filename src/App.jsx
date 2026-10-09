import React from 'react'
import  {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import Hello from './Components/Hello'
import LogIn from './Components/LogIn'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<h1>404 PageNot Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
