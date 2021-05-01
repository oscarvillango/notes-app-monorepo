/* eslint-disable react/prop-types */
import Toggable from './Toggable'
import React, { useState } from 'react'
import Proptypes from 'prop-types'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const credentials = {
      username,
      password
    }

    handleLogin(credentials)

    setUsername('')
    setPassword('')
  }

  return (
    <Toggable showLabel='Display Login' hideLabel='Cancel'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          placeholder='Username'
          name='username'
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Password'
          name='password'
          onChange={({ target }) => setPassword(target.value)}
        />
        <button id='js-submit-login'>Login</button>
      </form>
    </Toggable>
  )
}

LoginForm.propTypes = {
  handleLogin: Proptypes.func.isRequired
}

export default LoginForm
