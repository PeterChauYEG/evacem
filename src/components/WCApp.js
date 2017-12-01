import React from 'react'

// Styles
import '../index.css'

// Components
import Footer from '../components/footer'
import WCHero from '../components/wchero'
import WCVerse from '../components/wcverse'

const WCApp = () => (
  <div className='WCApp'>
    <WCHero />
    <WCVerse />
    <Footer />
  </div>
)

export default WCApp
