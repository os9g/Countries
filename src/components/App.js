import React, { useEffect, useState } from 'react'
import Header from './Header'
import Search from './Search'
import Countries from './countries'
import PopupCard from './PopupCard'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('https://restcountries.com/v2/all', {})
      setResults(data)
    }
    fetch()
  }, [])
  const [Results, setResults] = useState([])
  const [termChange, setTermChange] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All Countries')
  const [selectedCountry, setSelectedCountry] = useState([Results[0]])
  const [visible, setVisible] = useState(false)

  const onTermChange = (term) => {
    let str = term
    str = str.replace(/\s+/g, '')
    str = str.toLowerCase()
    setTermChange(str)
  }
  const onRegionChange = (region) => {
    setSelectedRegion(region)
  }
  const onCountrySelect = (country) => {
    setVisible(true)
    setSelectedCountry(country)
  }
  return (
    <div>
      <PopupCard
        visible={visible}
        setVisible={setVisible}
        country={selectedCountry}
      />
      <Header />
      <Search onTermChange={onTermChange} onRegionChange={onRegionChange} />
      <Countries
        selectedCountry={selectedCountry}
        onCountrySelect={onCountrySelect}
        countries={Results}
        term={termChange}
        region={selectedRegion}
      />
    </div>
  )
}
export default App
