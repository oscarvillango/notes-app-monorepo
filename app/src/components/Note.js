/* eslint-disable react/prop-types */
import React from 'react'
const Note = ({ note, toggleImportant }) => {
  return (
    <li>
      <h4>{note.content}</h4>
      <button onClick={toggleImportant}>Fire Event</button>
    </li>
  )
}

export default Note
