import React from 'react'
import './Rates.scss'
import CountUp from 'react-countup'

function Rates() {
  return (
    <div className='rates'>
      <div className='container'>
        <div className='title'>
            <h2>Everything you need to succeed</h2>
        </div>
        <div className='values'>
            <div className='rate'>
                <h3>72</h3>
                <h4>Lessons</h4>
            </div>
            <div className='rate'>
                <h3>30+</h3>
                <h4>Hours</h4>
            </div>
            <div className='rate'>
                <h3>14</h3>
                <h4>Mentors</h4>
            </div>
            <div className='rate'>
                <h3>8k+</h3>
                <h4>Students</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rates
