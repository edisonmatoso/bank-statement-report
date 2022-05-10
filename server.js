const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001

app.use(cors())

app.get('/data', (req, res) => {
  const data = require('./data.json')
  res.send(data)
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})
