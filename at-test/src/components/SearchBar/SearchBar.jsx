import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import './SearchBar.css'

function SearchBar() {
  const [value, setValue] = useState('')
  const [results, setResults] = useState([]);


  const onSearch = (searchTerm) => {
    setResults([])
    setResults(searchTerm)
  }

  function onChange(e) {
    setValue(e.target.value)
  } 

  return (
    <div>
      <form onSubmit={() => onSearch(value)}>
        <label>
          Search for a destination:
        <input type='text' value={value} placeholder="Search" onChange={onChange}></input>
        </label>
        <Link to={`/results/${value}`}><input type="submit" value="Submit" /></Link>
      </form>
    </div>
  )
}

export default SearchBar