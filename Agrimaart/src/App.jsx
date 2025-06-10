import React from 'react'
import Home from './components/home.jsx'
import { BrowserRouter,Routes,Router,Route } from "react-router"
import './App.css'

const App = () => {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
</>
  )
}

export default App