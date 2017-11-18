import React from 'react'

// Styles
import '../index.css'

// Components
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'

const App = () => (
  <div className='App'>
    <Hero />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default App
