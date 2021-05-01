const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  const auth = request.get('authorization')
  let token = null

  if (auth && auth.toLowerCase().startsWith('bearer')) {
    token = auth.split(' ')[1]
  }

  let decodedToken = {}

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    next(error)
  }

  if (!token || !decodedToken.id) {
    return response.status(403).json({
      error: 'invalid or missing token'
    })
  }

  const { id: userId } = decodedToken

  request.userId = userId

  next()
}
