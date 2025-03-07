import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='left'>
            <div className='details'>
                <h3>Animately</h3>
                <p className='description'>Learn animation <br/> online from <br/> leading experts</p>
                <div className='buttons'>
                    <div className='signUp'>
                        <p>Sign up for free</p>
                    </div>
                    <div className='learnMore'>
                        <p>Learn more</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='image'>
                <img src='https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
