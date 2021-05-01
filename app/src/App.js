import './styles.css'
import Note from './components/Note'
import LoginForm from './components/LoginForm'
import React, { useState, useEffect } from 'react'

import notesService from './services/notes'
import loginService from './services/login'
import NewNoteForm from './components/NewNoteForm'

export default function App () {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [user, setUser] = useState(null)

  useEffect(() => {
    setLoading(true)
    notesService.getAllNotes().then((notes) => {
      setLoading(false)
      setNotes(notes)
    })
  }, [])

  useEffect(() => {
    const loggedUserString = window.localStorage.getItem('loggedUser')
    if (loggedUserString) {
      const currentUser = JSON.parse(loggedUserString)
      setUser(currentUser)
      notesService.setToken(currentUser.token)
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    notesService.setToken(null)
    window.localStorage.removeItem('loggedUser')
  }

  const addNote = (newNoteObject) => {
    const { token } = user

    notesService.createNote(newNoteObject, { token }).then((data) => {
      setNotes((prevNotes) => prevNotes.concat(data))
    })
  }

  const handleLogin = async (credentials) => {
    try {
      const userLogged = await loginService.login(credentials)

      window.localStorage.setItem('loggedUser', JSON.stringify(userLogged))
      notesService.setToken(userLogged.token)

      setUser(userLogged)
    } catch (err) {
      setError('Wrong credentials')
      setTimeout(() => setError(''), 5000)
    }
  }

  return (
    <div>
      {error ? <div>{error}</div> : ''}
      {user
        ? <NewNoteForm addNote={addNote} handleLogout={handleLogout} />
        : <LoginForm handleLogin={handleLogin} />}

      <h1>Posts</h1>
      {loading ? 'Cargando' : ''}
      <ol>
        {notes.map((note) => (
          <Note key={note.id} note={note} toggleImportant={() => console.log('Mark as important')} />
        ))}
      </ol>

    </div>
  )
}
