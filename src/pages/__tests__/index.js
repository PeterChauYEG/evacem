import React from 'react'
import renderer from 'react-test-renderer'

// Component to be tested
import IndexPage from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(
    <IndexPage />
  )
  expect(tree).toMatchSnapshot()
})
