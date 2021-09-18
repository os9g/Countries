import React, { useState, useEffect } from 'react'
import Dropdwon from './dropdwon'
const options = [
  {
    region: 'All Countries',
  },
  {
    region: 'Africa',
  },
  {
    region: 'Americas',
  },
  {
    region: 'Asia',
  },
  {
    region: 'Europe',
  },
  {
    region: 'Oceania',
  },
]
const Search = ({ onTermChange, onRegionChange }) => {
  const [term, setTerm] = useState('')

  return (
    <div className="search">
      <div className="container flex">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-search"></i>
          </span>
          <input
            value={term}
            onChange={(e) => {
              onTermChange(e.target.value)
              setTerm(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="Search for a country"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <Dropdwon options={options} onRegionChange={onRegionChange} />
      </div>
    </div>
  )
}
export default Search
