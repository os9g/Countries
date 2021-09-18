import React from 'react'

const Countries = ({ countries, term }) => {
  console.log(countries)
  const Rendered = countries.map((country) => {
    let CountryName = country.name
    CountryName = CountryName.replace(/\s+/g, '')
    CountryName = CountryName.toLowerCase()
    if (term) {
      if (CountryName.includes(term, 0)) {
        return (
          <div className="card" key={country.alpha3Code}>
            <img src={country.flag} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{country.name}</h4>
              <p>{`Population: ${country.population}`}</p>
              <p>{`Region: ${country.region}`}</p>
              <p>{`Capital: ${country.capital} `}</p>
            </div>
          </div>
        )
      } else {
        return null
      }
    } else {
      return (
        <div className="card" key={country.alpha3Code}>
          <img src={country.flag} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{country.name}</h4>
            <p>{`Population: ${country.population}`}</p>
            <p>{`Region: ${country.region}`}</p>
            <p>{`Capital: ${country.capital} `}</p>
          </div>
        </div>
      )
    }
  })
  return (
    <div className="countries">
      <div className="container">
        <div className="grid">{Rendered}</div>
      </div>
    </div>
  )
}

export default Countries
