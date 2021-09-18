import React from 'react'

const Countries = ({ countries, term, region }) => {
  let Rendered = countries.map((country) => {
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
      if (region === 'All Countries') {
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
        if (region === country.region) {
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
      }
    }
  })
  Rendered = Rendered.filter((n) => n)
  return (
    <div className="countries">
      <div className="container">
        <div>{Rendered.length === 0 ? <h1>No Results</h1> : null}</div>
        <div className="grid">{Rendered}</div>
      </div>
    </div>
  )
}

export default Countries
