import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Countries from "./components/Negara"
import Header from './components/header'
import Filter from "./components/filter"

const url = 'https://restcountries.com/v3.1/all'

function App() {
  return (
    <Router>
      <Header />
    
      <Routes>
        <Route 
        path="/Negara" 
        element={
          <>
            <Filter />
            <Countries />
          </>
        }
      />
      </Routes>

    </Router>
  )
}

export default App
