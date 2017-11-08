import React from 'react'
import renderer from 'react-test-renderer'

// Component to be tested
import Hero from '../hero'

it('renders correctly', () => {
  const tree = renderer.create(
    <Hero />
  )
  expect(tree).toMatchSnapshot()
})
