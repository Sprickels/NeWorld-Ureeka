import React from "react"
import Countries from "./components/Negara"
import Header from './components/header'
import Filter from "./components/filter"

const url = 'https://restcountries.com/v3.1/all'

function App() {
  return (
    <>
        <Header />
        <Filter />
       <Countries />

    </>
  )
}

export default App
