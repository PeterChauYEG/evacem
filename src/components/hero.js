import React from 'react'

import {
  Link
} from 'react-router-dom'

// import css
import '../index.css'

const Hero = () => (
  <div className='hero'>
    <ul className='nav'>
      <li><Link to='/wintercamp'>Wintercamp 2018</Link></li>
    </ul>
    <div className='hero-content'>
      <h1 className='hero-title'>Edmonton Vietnamese</h1>
      <h1 className='hero-title'>Alliance Church</h1>
      <div className='hero-sub'>
        <h2 className='hero-subtitle'>English Ministries</h2>
        <div className='hero-decoration' />
      </div>
    </div>
    <div className='hero-image' />
  </div>
)

export default Hero
