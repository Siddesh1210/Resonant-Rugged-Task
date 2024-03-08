import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeProducts from '../components/HomeProducts'
import TopWatchesHome from '../components/TopWatchesHome'
import TopEarbudsHome from '../components/TopEarbudsHome'
import TopLaptopsHome from '../components/TopLaptopsHome'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <HomeProducts/>
    <TopWatchesHome/>
    <TopEarbudsHome/>
    <TopLaptopsHome/>
    <Footer/>
    </>
  )
}

export default HomePage