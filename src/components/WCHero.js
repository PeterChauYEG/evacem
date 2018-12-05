import React from 'react'

import * as Scroll from 'react-scroll'

import {
  Link
} from 'react-router-dom'

// import css
import '../index.css'

let scroller = Scroll.scroller

// handleSpeaker - nav to 'speaker'
const handleNavigate = (name) => {
  scroller.scrollTo(
    name,
    {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50 // Scrolls to element + 50 pixels down the page
    }
  )
}

const WCHero = () => (
  <div className='wc-hero'>
    <ul className='wc-nav'>
      <li onClick={handleNavigate.bind(null, 'speaker')}>Speaker</li>
      <li onClick={handleNavigate.bind(null, 'faq')}>FAQ</li>
      <li><Link to='/'>EVACEM</Link></li>
    </ul>
    <div className='wc-hero-content'>
      <h1 className='wc-hero-title'>Winter Camp 2019</h1>
      <h1 className='wc-hero-subtitle'>Greater Than</h1>
      <div 
        className='wc-hero-sub'
        onClick={handleNavigate.bind(null, 'registration')}>
        <p>Registration</p>
      </div>
    </div>
  </div>
)

export default WCHero
