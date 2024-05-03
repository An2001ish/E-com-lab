import React, { Profiler, useEffect } from 'react'
import "./Navbar.css"
import profile from "./profile.png"
import logo from "./logo.png"
import search from "./search.png"

function Navbar() {

  return (
    <div className='nav-container'>
      <a href="" className='logo'>
        <img src={logo} alt="" />
      </a>
      <ul className='nav-items'>
        <li><a href="">HOME</a></li>
        <li><a href="">SHOP</a></li>
        <li><a href="">CONTACT</a></li>
        <li><a href=""><img src={search} alt=""/></a></li>
        <li><a href=""><img src={profile} alt=""/></a></li>
      </ul>
    </div>
  )
}

export default Navbar
