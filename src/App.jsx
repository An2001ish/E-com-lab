import React from 'react'
import Account from './Components/Account/Account.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Slider from './Components/Slider/Slider.jsx'
import Offers from './Components/Offers/Offers.jsx'
import TopSelling from './Components/Top Selling/TopSelling.jsx'

function App() {
  return (
    <div>
      <Account/>
      <Navbar/>
      <Slider/>
      <Offers/>
      <TopSelling/>
    </div>
  )
}

export default App
