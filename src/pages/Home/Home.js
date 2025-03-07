import React from 'react'
import './Home.scss'
import Navbar from '../../component/Navbar/Navbar'
import Hero from '../../component/Hero/Hero'
import Course from '../../component/Course/Course'

function Home() {
  return (
    <div className='home'> 
      <Navbar/>
      <Hero/>
      <Course/>
    </div>
  )
}

export default Home
