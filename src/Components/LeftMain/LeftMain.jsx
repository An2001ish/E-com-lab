import React from 'react'
import "./LeftMain.css"

function LeftMain() {
  return (
    <div className='left-main'>
      <ul>
        <li className='sub-menu'><a href="">Electronics</a>
        <ul>
          <li><a href="">Home Appliances</a></li>
          <li><a href="">Life Style</a></li>
        </ul></li>
        <li><a href="">Health & Beauty</a></li>
        <li className='sub-menu'><a href="">Men's Fashion</a>
        <ul>
          <li><a href="">Formal</a></li>
          <li><a href="">Semi-Formal</a></li>
          <li><a href="">Casual</a></li>
        </ul></li>
        <li><a href="">Women's Fashion</a></li>
        <li><a href="">Sports</a></li>
        <li><a href="">Groceries</a></li>
      </ul>
    </div>
  )
}

export default LeftMain
