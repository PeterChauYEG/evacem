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
            alt='Jen VanSteenbergen' />
        </div>
        <div className='wc-speaker-name'>
          <p>Jen VanSteenbergen</p>
        </div>
        <div className='wc-faq-body'>
          <p>
            Jen is a west coast born Canadian, raised on God with her toes in the ocean and her back to the mountains. She is a speaker and writer and is determined to live up to Romans 12:1, honoring God from the inside out, a living sacrifice. Family, Friends and keeping active is part of her day to day life! While any (and almost all) outdoor activity will suite the bill, volleyball is the sport of choice closely followed by surfing on her visits out west.
          </p>
        </div>

        <div className='wc-faq-body'>
          <p>
            She is currently married to her husband Doug, and with their cat and their dog in a 600 square foot living space... times can be a little crazy! She loves to study and the more she hears about the more she wants to discover, Jen is currently pursuing her Masters in Theological Studies. Ultimately she is driven by a love for God and a deep passion to share that love with all she can. Jen loves to challenge men & women to find their authentic voice, a zest for life and their confidence in Christ. To encourage bold living, breaking through comfort zones and learning to honor God with everything that they do.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default WCSpeaker
