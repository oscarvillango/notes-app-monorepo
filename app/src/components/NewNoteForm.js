/* eslint-disable react/prop-types */

import React, { useState, useRef } from 'react'
import Toggable from './Toggable'
const NewNoteForm = ({ addNote, handleLogout }) => {
  const [newNote, setNewNotes] = useState('')

  const element = useRef()

  const handleNewNote = (event) => {
    setNewNotes(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newNoteObject = {
      content: newNote,
      important: Math.random > 0.5
    }

    addNote(newNoteObject)
    setNewNotes('')
    element.current.toggleVisibility()
  }

  return (
    <div>
      <Toggable showLabel='Add New Note' hideLabel='Cancel' ref={element}>
        <h3>Create New Note</h3>
        <form onSubmit={handleSubmit}>
          Note <input value={newNote} onChange={handleNewNote} />
          <button>Create Note</button>
        </form>
      </Toggable>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default NewNoteForm
