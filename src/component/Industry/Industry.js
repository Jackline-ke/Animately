import React from 'react'
import './Industry.scss'
import { FaFigma } from 'react-icons/fa'
import { FaSpotify } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaAirbnb } from 'react-icons/fa'


function Industry() {
  return (
    <div className='industry'>
      <div className='container'>
        <div className='title'>
            <p>Educating Industry Leaders</p>
        </div>
        <div className='company'>
            <div className='figma'>
                <FaSpotify size={40}/>
                <p>Spotify</p>
            </div>
            <div className='figma'>
                <FaFigma size={40}/>
                <p>Figma</p>
            </div>
            <div className='figma'>
                <p>Webflow</p>
            </div>
            <div className='figma'>
                <FaAirbnb size={40}/>
                <p>airbnd</p>
            </div>
            <div className='figma'>
                <FaGoogle size={40}/>
                <p>Google</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Industry
