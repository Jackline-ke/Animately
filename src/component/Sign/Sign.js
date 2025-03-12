import React from 'react'
import './Sign.scss'
import {FaCheck} from 'react-icons/fa'

function Sign() {
  return (
    <div className='sign'>
        <div className='container'>
            <div className='left'>
                <div className='description'>
                    <h4>Learn at your<br/> prefered pace</h4>
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
                        <p>Sign up for free</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1645620766046-b129a9c5f658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8' alt=''/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Sign
