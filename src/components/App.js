import React, { useEffect, useState } from 'react'
import Header from './Header'
import Search from './Search'
import Countries from './countries'
import axios from 'axios'

const App = () => {
  const [Results, setResults] = useState([])
  const [termChange, setTermChange] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All Countries')
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all')
      setResults(data)
    }
    fetch()
  }, [])

  const onTermChange = (term) => {
    let str = term
    str = str.replace(/\s+/g, '')
    str = str.toLowerCase()
    setTermChange(str)
  }
  const onRegionChange = (region) => {
    setSelectedRegion(region)
  }
  return (
    <div>
      <Header />
      <Search onTermChange={onTermChange} onRegionChange={onRegionChange} />
      <Countries
        countries={Results}
        term={termChange}
        region={selectedRegion}
      />
    </div>
  )
}
export default App
