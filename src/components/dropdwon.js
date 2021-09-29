import React, { useState } from 'react'

const Dropdwon = ({ options, onRegionChange }) => {
  const [selected, setSelected] = useState('Fliter by Region')
  const renderedOption = options.map((option) => {
    return (
      <li key={option.region}>
        <a
          className="dropdown-item"
          onClick={() => {
            setSelected(option.region)
            onRegionChange(option.region)
          }}
        >
          {option.region}
        </a>
      </li>
    )
  })
  return (
    <div className="dropdown felx">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selected}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {renderedOption}
      </ul>
    </div>
  )
}
export default Dropdwon
