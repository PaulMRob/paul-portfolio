import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'


function App() {

  return (
    <Router>
      <nav>
        <h2>Paul Robertson</h2>
        <Link to="/">HOME</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
  )
}

export default App
