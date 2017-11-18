import React from 'react'

// import component
import Map from '../components/map'

// import css
import '../index.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-map'>
        <Map />
      </div>
      <div className='contact-content'>
        <div className='contact-address-container'>
          <p className='contact-address'>7302 - 118 Street NW</p>
          <p className='contact-address'>Edmonton, AB</p>
          <p className='contact-address'>T6G 1S4</p>
        </div>
        <div className='contact-emails-container'>
          <div className='contact-email-container'>
            <p className='contact-name'>Kevin Nguu</p>
            <p className='contact-email'>kvnnguu@gmail.com</p>
          </div>
          <div className='contact-email-container'>
            <p className='contact-name'>Michelle Le</p>
            <p className='contact-email'>michellexeole@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
