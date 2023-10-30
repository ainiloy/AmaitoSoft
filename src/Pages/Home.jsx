import React from 'react'
import Navigation from '../Components/Navigation'
import HomeServices from '../Components/HomeServices'
import Portfolio from '../Components/Portfolio'
import Footer from '../Components/Footer'
import CountDown from '../Components/CountDown'

function Home() {
  return (
    <div>
        <Navigation/>
        <CountDown/>
        <HomeServices/>
        <Footer/>
    </div>
  )
}

export default Home