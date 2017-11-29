import React from 'react'
import {
  Link
} from 'react-router-dom'

// import css
import '../index.css'

const suggestions = [
  'wintercamp',
  'wintercamp2018',
  'ilovewintercamp'
]

const renderSuggestions = (suggestions) => {
  const elements = suggestions.map((suggestion, i) => {
    const link = `/${suggestion}`
    const body = `evac.com${link}`

    return (
      <h2 className='hero-subtitle'
        key={i}>
        or perhaps <Link to={link}>{body}</Link> ?
      </h2>
    )
  })

  return elements
}

const NoMatch = () => (
  <div className='hero'>
    <div className='hero-content'>
      <h1 className='hero-title'>404</h1>
      <div className='hero-sub'>
        <h2 className='hero-subtitle'>
          did you mean to go to <Link to='/'>evacem.com</Link> ?
        </h2>
        {renderSuggestions(suggestions)}
      </div>
    </div>
  </div>
)

export default NoMatch
