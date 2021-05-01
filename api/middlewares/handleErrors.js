// TODO: Refactor
module.exports = (error, request, response, next) => {
  console.error(error.name)
  console.log('----------------------------')
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'Request is malformed' })
  } else if (error.name === 'JsonWebTokenError') {
    response.status(403).send({ error: 'Token missing or invalid' })
  }
  response.status(500).end()
}
