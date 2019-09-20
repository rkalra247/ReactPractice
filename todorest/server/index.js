const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  console.log('Hi')
})

app.listen(9665)
