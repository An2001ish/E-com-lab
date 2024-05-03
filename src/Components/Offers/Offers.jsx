import React from 'react'
import "./Offers.css"
import offer1 from "./offer1.png"
import offer2 from "./offer2.png"
import offer3 from "./offer3.png"

function Offers() {
  return (
    <div className='offer-container'>
      <ul>
        <li><a href=""><img src={offer1} alt="" /></a></li>
        <li><a href=""><img src={offer2} alt="" /></a></li>
        <li><a href=""><img src={offer3} alt="" /></a></li>
      </ul>
    </div>
  )
}

export default Offers
