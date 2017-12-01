import React from 'react'

// Styles
import '../index.css'

// Components
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Values from '../components/values'

const MainApp = () => (
  <div className='MainApp'>
    <Hero />
    <About />
    <Values />
    <Contact />
    <Footer />
  </div>
)

export default MainApp
