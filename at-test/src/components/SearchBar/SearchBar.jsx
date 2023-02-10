import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import './SearchBar.css'

function SearchBar() {
  const [value, setValue] = useState('')

  function onChange(e) {
    setValue(e.target.value)
  } 

  return (
    <div>
      <form>
        <label>
          Search for a destination:
        <input type='text' value={value} placeholder="Search" onChange={onChange}></input>
        </label>
        {/* Here is where the search query is pushed into the params of the results page */}
        <Link to={`/results/${value}`}><input type="submit" value="Submit" /></Link> 
      </form>
    </div>
  )
}

export default SearchBar