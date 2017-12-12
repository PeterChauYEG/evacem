import React from 'react'

// import css
import '../index.css'

// import photo
import waiver from '../media/WC2018_Waiver.pdf'

const WCRegistration = () => (
  <div className='wc-faq'>
    <div className='wc-faq-content'>
      <h1 className='wc-faq-title'>Registration</h1>
      <div className='wc-faq-body'>
        <p>
          Please fill out the registration form below to register for winter camp 2018. Provided below is a link for you to print out a waiver form. Please have this filled out and handed to your church leader(s) before winter camp 2018.
        </p>
        <a className='wc-registration-link'
          target='_blank'
          href={waiver}>
          Link to Waiver
        </a>

        <div className='wc-registration-form'>

          <div className='wc-registration-label'>
            <p>
              First Name
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              Last Name
            </p>
          </div>
          <input className='wc-registration-input' />

          <div className='wc-registration-label'>
            <p>
              Address
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              City
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              Province
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              Postal Code
            </p>
          </div>
          <input className='wc-registration-input' />

          <div className='wc-registration-label'>
            <p>
              Home Phone
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              Cell Phone
            </p>
          </div>
          <input className='wc-registration-input' />

          <div className='wc-registration-label'>
            <p>
              Age
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              Gender
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              Medical Conditions
            </p>
          </div>
          <textarea className='wc-registration-textarea' />
          <div className='wc-registration-label'>
            <p>
              Emergency Contact Name
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              Emergency Contact Number
            </p>
          </div>
          <input className='wc-registration-input' />

          <div className='wc-registration-label'>
            <p>
              Home Church
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              How Long Have You Been a Christian?
            </p>
          </div>
          <input className='wc-registration-input' />
          <div className='wc-registration-label'>
            <p>
              Additional Comments
            </p>
          </div>
          <textarea className='wc-registration-textarea'
            rows={4} />

          <div className='input-label'>
            <p>
              I Will Bring a Signed Waiver to Camp
            </p>
            <input type='checkbox'
              className='wc-registration-checkbox' />
          </div>
          <div className='input-label'>
            <p>
              I Agree to Abide By All Camp Rules
            </p>
            <input type='checkbox'
              className='wc-registration-checkbox' />
          </div>

          <div>
            <button className='input-button'>
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
)

export default WCRegistration
