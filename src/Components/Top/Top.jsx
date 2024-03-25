import React from 'react'
import "./Top.css"
import logo from "./shopping-cart.png"

function Top() {
  return (
    <div className='top'>
    <div className="contents">
      <div className="logo">
        <img src={logo} alt="" />
        <p>BUYET</p>
      </div>
      <div className="search-box">
        <input type="string" placeholder='Search Something...'/>
      </div>
      </div>
    </div>
  )
}

export default Top
