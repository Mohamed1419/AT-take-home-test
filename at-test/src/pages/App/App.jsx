import React from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import ResultsPage from '../ResultsPage/ResultsPage'
import HomePage from '../HomePage/HomePage'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'

function App() {
  return (
    <div className='App'>
      <h1>Product Search</h1>
      <SearchBar />
      <Routes>
        <Route exact path="*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<HomePage />} />
        {/*here we are passing the query data from the searchbar component into the params */}
        <Route exact path="/results/:query" element={<ResultsPage />} /> 
      </Routes>
    </div>
  )
}

export default App