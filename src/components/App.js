import React, { useEffect, useState } from 'react'
import Header from './Header'
import Search from './Search'
import Countries from './countries'
import axios from 'axios'

const App = () => {
  const [Results, setResults] = useState([])
  const [termChange, setTermChange] = useState('')
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
  return (
    <div>
      <Header />
      <Search onTermChange={onTermChange} />
      <Countries countries={Results} term={termChange} />
    </div>
  )
}
export default App
