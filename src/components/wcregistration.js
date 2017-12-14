import React, { Component } from 'react'
import * as firebase from 'firebase'
import { ToastContainer, toast, style } from 'react-toastify'

// import css
import '../index.css'

// import photo
import waiver from '../media/WC2018_Waiver.pdf'

// setup toast style
style({
  // width: '50%'
  fontSize: '10px'
})

class WCRegistration extends Component {
  constructor (props) {
    super(props)

    // initialize state
    this.state = {
      additionalComments: '',
      address: '',
      age: null,
      agreeToAbide: false,
      belief: null,
      cellPhone: null,
      city: '',
      email: '',
      emergencyContactName: '',
      emergencyContactNumber: null,
      firstName: '',
      gender: '',
      homeChurch: '',
      homePhone: null,
      lastName: '',
      medicalConditions: '',
      postalCode: '',
      province: '',
      willBringWaiver: false
    }

    // bind functions
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    // get type
    const type = event.target.type

    // get value
    let value

    if (type === 'checkbox') {
      value = this.sanitize(event.target.checked, type)
    } else {
      value = this.sanitize(event.target.value, type)
    }

    // get name
    const name = event.target.name

    // update state
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    const {
      additionalComments,
      address,
      age,
      agreeToAbide,
      belief,
      cellPhone,
      city,
      email,
      emergencyContactName,
      emergencyContactNumber,
      firstName,
      gender,
      homeChurch,
      homePhone,
      lastName,
      medicalConditions,
      postalCode,
      province,
      willBringWaiver
    } = this.state

    // make sure checkboxes arent undefined
    // else exit
    if (!willBringWaiver || !agreeToAbide) {
      toast.error('Please agree to the terms', {
        position: toast.POSITION.TOP_CENTER
      })

      return
    }

    const data = {
      additionalComments,
      address,
      age,
      agreeToAbide,
      belief,
      cellPhone,
      city,
      email,
      emergencyContactName,
      emergencyContactNumber,
      firstName,
      gender,
      homeChurch,
      homePhone,
      lastName,
      medicalConditions,
      postalCode,
      province,
      willBringWaiver
    }

    // setup db services
    let database = firebase.database()

    // make request
    this.writeRegistration(data, database)
  }

  sanitize (input, type) {
    let sanitized

    // sanitize based on type
    switch (type) {
      case 'tel':
        // make sure it's a phone
        sanitized = input !== null
          ? input.trim().replace(/(<([^>]+)>)/ig, '')
          : undefined
        break
      case 'number':
        // make sure it's a string
        sanitized = typeof input === 'string'
          ? input
          : undefined
        break
      case 'email':
      case 'text':
      case 'textarea':
        // make sure it's a string
        sanitized = typeof input === 'string'
          ? input.trim().replace(/(<([^>]+)>)/ig, '')
          : undefined
        break
      case 'checkbox':
        // make sure it's a boolean
        sanitized = typeof input === 'boolean'
          ? input
          : undefined
        break
      default:
        sanitized = undefined
    }

    return sanitized
  }

  writeRegistration (data, database) {
    const {
      firstName,
      lastName
    } = data

    // write the data
    database.ref('registrations/' + firstName + lastName).set(data)

    toast.success('Registered! You should receive a confirmation email', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  render () {
    return (
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
              <input className='wc-registration-input'
                name='firstName'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Last Name
                </p>
              </div>
              <input className='wc-registration-input'
                name='lastName'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Email
                </p>
              </div>
              <input className='wc-registration-input'
                name='email'
                type='email'
                onChange={this.handleChange} />

              <div className='wc-registration-label'>
                <p>
                  Address
                </p>
              </div>
              <input className='wc-registration-input'
                name='address'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  City
                </p>
              </div>
              <input className='wc-registration-input'
                name='city'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Province
                </p>
              </div>
              <input className='wc-registration-input'
                name='province'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Postal Code
                </p>
              </div>
              <input className='wc-registration-input'
                name='postalCode'
                onChange={this.handleChange} />

              <div className='wc-registration-label'>
                <p>
                  Home Phone
                </p>
              </div>
              <input className='wc-registration-input'
                type='tel'
                name='homePhone'
                onChange={this.handleChange} />

              <div className='wc-registration-label'>
                <p>
                  Cell Phone
                </p>
              </div>
              <input className='wc-registration-input'
                type='tel'
                name='cellPhone'
                onChange={this.handleChange} />

              <div className='wc-registration-label'>
                <p>
                  Age
                </p>
              </div>
              <input className='wc-registration-input'
                type='number'
                name='age'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Gender
                </p>
              </div>
              <input className='wc-registration-input'
                name='gender'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Medical Conditions
                </p>
              </div>
              <textarea className='wc-registration-textarea'
                rows={4}
                name='medicalConditions'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Emergency Contact Name
                </p>
              </div>
              <input className='wc-registration-input'
                name='emergencyContactName'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Emergency Contact Number
                </p>
              </div>
              <input className='wc-registration-input'
                type='tel'
                name='emergencyContactNumber'
                onChange={this.handleChange} />

              <div className='wc-registration-label'>
                <p>
                  Home Church
                </p>
              </div>
              <input className='wc-registration-input'
                name='homeChurch'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  How Long Have You Been a Christian?
                </p>
              </div>
              <input className='wc-registration-input'
                type='number'
                name='belief'
                onChange={this.handleChange} />
              <div className='wc-registration-label'>
                <p>
                  Additional Comments
                </p>
              </div>
              <textarea className='wc-registration-textarea'
                rows={4}
                name='additionalComments'
                onChange={this.handleChange} />

              <div className='input-label'>
                <p>
                  I Will Bring a Signed Waiver to Camp
                </p>
                <input type='checkbox'
                  className='wc-registration-checkbox'
                  name='willBringWaiver'
                  onChange={this.handleChange} />
              </div>
              <div className='input-label'>
                <p>
                  I Agree to Abide By All Camp Rules
                </p>
                <input type='checkbox'
                  className='wc-registration-checkbox'
                  name='agreeToAbide'
                  onChange={this.handleChange} />
              </div>

              <div className='wc-registration-container-submit'>
                <button className='input-button'
                  name='submit'
                  onClick={this.handleSubmit}>
                  Submit
                </button>
                <ToastContainer autoClose={false} />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WCRegistration
