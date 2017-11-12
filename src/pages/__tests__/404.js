import React from 'react'
import renderer from 'react-test-renderer'

// Component to be tested
import FourZeroFourPage from '../404.js'

it('renders correctly', () => {
  const tree = renderer.create(
    <FourZeroFourPage />
  )
  expect(tree).toMatchSnapshot()
})
