import React, { useState } from 'react'

const PopupCard = ({ visible, setVisible, country }) => {
  let RenderedCurrency
  let RenderdLanguages
  let topDomain
  const numberWithSpaces = (x) => {
    if (country.length !== 1) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    } else {
      return null
    }
  }
  const RenderList = (item) => {
    let render = item.map((itm) => {
      return itm.name
    })

    const length = render.length
    render = render.map((second_itm, index) => {
      return length - 1 === index ? ` ${second_itm}` : `${second_itm}, `
    })
    return render
  }
  if (country.length !== 1) {
    topDomain = country.topLevelDomain
    topDomain = topDomain[0].toUpperCase()
    RenderdLanguages = RenderList(country.languages)
    RenderedCurrency = RenderList(country.currencies)
  }
  return (
    <div className={`popup-card clear card ${visible ? '' : 'invisible'}`}>
      <div className="header flex">
        <h1>More About the Country</h1>
        <button
          onClick={() => setVisible(false)}
          className={`close-btn ${visible ? '' : 'invisible'}`}
        >
          <i class="fas fa-times fa-2x"></i>
        </button>
      </div>

      <div className="content grid">
        <img src={country.flag}></img>

        <div className="info">
          <div className="grid">
            <div className="colm-1">
              <h2 className="name bold">{country.name}</h2>
              <div className="sub-info flex">
                <p className="bold">Native Name:</p> <p>{country.nativeName}</p>
              </div>
              <div className="sub-info flex">
                <p className="bold">Population:</p>{' '}
                <p>{numberWithSpaces(country.population)}</p>
              </div>
              <div className="sub-info flex">
                <p className="bold">Region:</p> <p>{country.region}</p>
              </div>
              <div className="sub-info flex">
                <p className="bold">Sub Region:</p> <p>{country.subregion}</p>
              </div>
              <div className="sub-info flex">
                <p className="bold">Capital:</p> <p>{country.capital}</p>
              </div>
            </div>
            <div className="colm-2">
              <div className="sub-info flex">
                <p className="bold">Top Level Domain:</p>
                <p>{topDomain}</p>
              </div>
              <div className="sub-info flex">
                <p className="bold">Currencies:</p>
                <p className="flex">{RenderedCurrency}</p>
              </div>
              <div className="sub-info flex">
                <p className="bold">Languges:</p>
                <p className="flex">{RenderdLanguages}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupCard
