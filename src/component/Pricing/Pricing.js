import React from 'react'
import './Pricing.scss'
import {FaCheck} from 'react-icons/fa'

function Pricing() {
  return (
    <div className='pricing'>
      <div className='container'>
        <div className='left'>
            <div className='image'>
                <img src='https://images.unsplash.com/photo-1739298061766-e2751d92e9db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
        </div>
        <div className='right'>
            <div className='description'>
                <h4>The best course <br/> in animation</h4>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='point'>
                    <div className='check'>
                        <FaCheck size={10}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className='point'>
                    <div className='check'>
                        <FaCheck size={10}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className='point'>
                    <div className='check'>
                        <FaCheck size={10}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className='button'>
                    <p>View Pricing</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
