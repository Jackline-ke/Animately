import React from 'react'
import './Testimony.scss'

function Testimony() {
  return (
    <div className='testimony'>
      <div className='container'>
        <div className='title'>
            <h2>What our student say</h2>
        </div>
        <div className='slide'>
            <div className='slider'>
                <div className='left'>
                    <p className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    <p className='name'>Qlynn, Webflow</p>
                </div>
                <div className='right'>
                    <img src='https://images.unsplash.com/photo-1642929392581-e7abec90b81c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimony
