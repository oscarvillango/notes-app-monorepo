import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Toggable from './Toggable'

describe('<Toggable />', () => {
  let toggable

  beforeEach(() => {
    toggable = render(
      <Toggable showLabel='Open Children' hideLabel='Close Children'>
        <div>This is a toggable</div>
      </Toggable>
    )
  })

  test('Verify the children is present', () => {
    expect(toggable.container).toHaveTextContent('This is a toggable')
  })

  test('Verify the initial section is hidden', () => {
    const contentParent = toggable.getByText('This is a toggable').parentNode
    expect(contentParent).toHaveStyle('display: none')
  })

  test('Verify the section is visible', () => {
    const contentParent = toggable.getByText('This is a toggable').parentNode
    const button = toggable.getByText('Open Children')
    fireEvent.click(button)
    expect(contentParent).toHaveStyle('display: block')
  })

  test('Verify the section can be opened and closed', () => {
    const contentParent = toggable.getByText('This is a toggable').parentNode
    const buttonOpen = toggable.getByText('Open Children')
    fireEvent.click(buttonOpen)
    expect(contentParent).toHaveStyle('display: block')
    const buttonClose = toggable.getByText('Close Children')
    fireEvent.click(buttonClose)
    expect(contentParent).toHaveStyle('display: none')
  })
})
