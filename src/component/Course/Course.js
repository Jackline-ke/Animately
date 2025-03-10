import React from 'react'
import './Course.scss'

function Course() {
  return (
    <div className='course'>
      <div className='container'>
        <div className='title'>
          <h4>Interactive online <br/>lessons at <br/>your own pace</h4>
          <img src='' alt=''/>
        </div>
        <div className='lessons'>
          <div className='courses'>
            <div class="shape"></div>
            <h5 className='module'>Module 1</h5>
            <h4>Principles</h4>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='courses'>
            <div class="shape"></div>
            <h5 className='module'>Module 1</h5>
            <h4>Basic</h4>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='courses'>
            <div class="shape"></div>
            <h5 className='module'>Module 1</h5>
            <h4>Advance</h4>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className='button'>
          <p>Learn more about the course</p>
        </div>
      </div>
    </div>
  )
}

export default Course
