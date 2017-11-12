import React from 'react'

// import css
import '../index.css'

// media
import heroMobile from '../media/hero-mobile.png'

const Hero = () => (
  <div className='hero'>
    <div className='hero-content'>
      <h1 className='hero-title'>Edmonton Vietnamese</h1>
      <h1 className='hero-title'>Alliance Church</h1>
      <h2 className='hero-subtitle'>English Ministries</h2>
    </div>
    <div className='hero-image'>
      <img src={heroMobile} alt='Edmonton Vietnamese Alliance Church' />
    </div>
  </div>
)

export default Hero
