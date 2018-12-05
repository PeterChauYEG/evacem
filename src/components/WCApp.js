import React from 'react'

import * as Scroll from 'react-scroll'

// Styles
import '../index.css'

// Components
import Footer from '../components/footer'
import WCFAQ from '../components/wcfaq'
import WCHero from '../components/WCHero'
// import WCLogo from '../components/WCLogo'
import WCRegistration from '../components/wcregistration'
import WCSpeaker from '../components/wcspeaker'
import WCVerse from '../components/wcverse'

let Element = Scroll.Element

const WCApp = () => (
  <div className='WCApp'>
    <WCHero />
    {/* <WCLogo /> */}
    <WCVerse />
    <Element name='speaker'>
      <WCSpeaker />
    </Element>
    <Element name='faq'>
      <WCFAQ />
    </Element>
    <Element name='registration'>
      <WCRegistration />
    </Element>
    <Footer />
  </div>
)

export default WCApp
