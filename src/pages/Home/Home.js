import React from 'react'
import './Home.scss'
import Navbar from '../../component/Navbar/Navbar'
import Hero from '../../component/Hero/Hero'
import Course from '../../component/Course/Course'
import Industry from '../../component/Industry/Industry'
import Pricing from '../../component/Pricing/Pricing'
import Sign from '../../component/Sign/Sign'
import Rates from '../../component/Rates/Rates'

function Home() {
  return (
    <div className='home'> 
      <Navbar/>
      <Hero/>
      <Course/>
      <Industry/>
      <Pricing/>
      <Rates/>
      <Sign/>
    </div>
  )
}

export default Home
