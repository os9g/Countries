import React, { useState } from 'react'

const Header = () => {
  const [darkTheme, setdarkTheme] = useState(true)
  const changeTheme = () => {
    setdarkTheme(!darkTheme)
    let primery, background, font
    if (darkTheme) {
      background = '#212E37'
      primery = '#2B3743'
      font = '#fff'
    } else {
      background = '#fff'
      primery = '#fff'
      font = '#0E0E0E'
    }

    document.documentElement.style.setProperty('--primary-color', primery)
    document.documentElement.style.setProperty('--background-color', background)
    document.documentElement.style.setProperty('--font-color', font)
  }
  return (
    <div className="header">
      <div className="card">
        <div className="container flex">
          <h1>Where in the word</h1>
          <div className="theme">
            <div class="form-check form-switch flex">
              <i class={`${darkTheme ? 'far' : 'fas'} fa-moon`}></i>
              <div>
                <input
                  onClick={() => {
                    changeTheme()
                  }}
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
