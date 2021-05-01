import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Note from './Note'

test('Component Note', () => {
  const note = {
    content: 'This is a test'
  }

  const noteComponent = render(<Note note={note} />)

  noteComponent.getByText('This is a test')
  expect(noteComponent.container).toHaveTextContent(note.content)
})

test('Component Note test event', () => {
  const note = {
    content: 'This is a test'
  }

  const mockToggleImportant = jest.fn()
  const noteComponent = render(<Note note={note} toggleImportant={mockToggleImportant} />)

  const button = noteComponent.getByText('Fire Event')
  fireEvent.click(button)

  expect(mockToggleImportant).toHaveBeenCalledTimes(1)
})
