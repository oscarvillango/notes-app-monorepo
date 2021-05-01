const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Users')

loginRouter.post('/', async (req, res) => {
  const { body } = req
  const { username, password } = body

  const user = await User.findOne({ username })

  // TODO: Check why throws an exception
  const passwordValidation = user === null ? false : await bcrypt.compare(password, user.passwordHash)

  if (!passwordValidation) {
    return res.status(401).json({
      error: 'Username or password incorrect'
    })
  }

  const userFortoken = {
    id: user._id,
    username: user.username
  }

  const token = jwt.sign(userFortoken, process.env.JWT_SECRET)

  res.send({
    username: user.username,
    name: user.name,
    token
  })
})

module.exports = loginRouter
