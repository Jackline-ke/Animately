import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'> 
        <div className='container'>
            <div className='left'>
              <div class="shape"></div>
              <div>Animately</div>
            </div>
            <div className='centre'>
              <ul>
                <li>Course</li>
                <li>Prcing</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='right'>
              <div className='login'>
                <p>Login</p>
              </div>
              <div className='signUp'>
                <p>Sign Up</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
