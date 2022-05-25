const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const api = require('./routes/api')

app.use('/api', api)

app.use((request, response) => {
  console.log(request.method)
  console.log(request.path)
  console.log(request.body)
  response.status(404).json({
    error: 'Not found'
  })
})

const PORT = 3001
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
