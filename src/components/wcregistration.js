import React from 'react'

// import css
import '../index.css'

const WCRegistration = () => (
  <div className='wc-faq'>
    <div className='wc-faq-content'>
      <h1 className='wc-faq-title'>Registration</h1>
      <div className='wc-faq-body'>
        <p>
          Please fill out the registration form below to register for winter camp 2018. Provided below is a link for you to print out a waiver form. Please have this filled out and handed to your church leader(s) before winter camp 2018.
        </p>
        <a>
          Link to Waiver
        </a>
        
        <div className='wc-registration-form'>

          <div className='input-label'>
            First Name
          </div>
          <input />
          <div className='input-label'>
            Last Name
          </div>
          <input />

          <div className='input-label'>
            Address
          </div>
          <input />
          <div className='input-label'>
            City
          </div>
          <input />
          <div className='input-label'>
            Province
          </div>
          <input />
          <div className='input-label'>
            Postal Code
          </div>
          <input />

          <div className='input-label'>
            Home Phone
          </div>
          <input />
          <div className='input-label'>
            Cell Phone
          </div>
          <input />

          <div className='input-label'>
            Age
          </div>
          <input />
          <div className='input-label'>
            Gender
          </div>
          <input />
          <div className='input-label'>
            Medical Conditions
          </div>
          <input />
          <div className='input-label'>
            Emergency Contact Name
          </div>
          <input />
          <div className='input-label'>
            Emergency Contact Number
          </div>
          <input />

          <div className='input-label'>
            Home Church
          </div>
          <input />
          <div className='input-label'>
            How Long Have You Been a Christian?
          </div>
          <input />
          <div className='input-label'>
            I Will Bring a Signed Waiver to Camp
          </div>
          <input />
          <div className='input-label'>
            I Agree to Abide By All Camp Rules
          </div>
          <checkbox />
          <div className='input-label'>
            Additional Comments
          </div>
          <textarea />

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
