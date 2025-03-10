import React from 'react'
import './Home.scss'
import Navbar from '../../component/Navbar/Navbar'
import Hero from '../../component/Hero/Hero'
import Course from '../../component/Course/Course'
import Industry from '../../component/Industry/Industry'

function Home() {
  return (
    <div className='home'> 
      <Navbar/>
      <Hero/>
      <Course/>
      <Industry/>
    </div>
  )
}

export default Home
