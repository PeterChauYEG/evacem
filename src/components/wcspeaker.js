import React from 'react'

// import css
import '../index.css'

// import photo
import speaker from '../media/speaker.png'

const WCSpeaker = () => (
  <div className='wc-faq'>
    <div className='wc-faq-content'>
      <div className='wc-speaker-section'>
        <div className='wc-speaker-photo-container'>
          <img
            className='wc-speaker-photo'
            src={speaker}
            alt='Sterling Hunter' />
        </div>
        <div className='wc-speaker-name'>
          <p>Sterling Hunter</p>
        </div>
        <div className='wc-faq-body'>
          <p>
            Sterling is the Harvest Culinary Ministries Director at First Alliance Church in Calgary. He also speaks at schools and camps and has a knack for teaching and connecting with young people.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default WCSpeaker
