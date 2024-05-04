import React, { useEffect } from 'react'
import "./Offers.css"
import offer1 from "./offer1.png"
import offer2 from "./offer2.png"
import offer3 from "./offer3.png"
import AOS from "aos"  
import "aos/dist/aos.css"

function Offers() {

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])

  return (
    <div className='offer-container'>
      <ul data-aos="fade-up">
        <li><a href=""><img src={offer1} alt="" /></a></li>
        <li><a href=""><img src={offer2} alt="" /></a></li>
        <li><a href=""><img src={offer3} alt="" /></a></li>
      </ul>
    </div>
  )       
}

export default Offers
