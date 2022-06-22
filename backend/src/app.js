console.log('aongus')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(express.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} Your user was registered, topes hehe!`
  })
})

app.listen(process.env.PORT || 8081)
