import React from 'react'
import "./TopSelling.css"
import ts1 from "./topselling1.jpg"
import ts2 from "./topselling2.jpg"
import ts3 from "./topselling3.jpg"
import ts4 from "./topselling4.jpg"

function TopSelling() {
  return (
    <div className='topselling-container'>
    <div className='ts'>TOP SELLING</div>
        <ul>
        <li><a href=""><img src={ts1} alt="" /></a></li>
        <li><a href=""><img src={ts2} alt="" /></a></li>
        <li><a href=""><img src={ts3} alt="" /></a></li>
        <li><a href=""><img src={ts4} alt="" /></a></li>
      </ul>
    </div>
  )
}

export default TopSelling
