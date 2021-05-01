/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const posts = []

const rootElement = document.getElementById('root')
ReactDOM.render(<App notes={posts} />, rootElement)
