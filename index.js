require('dotenv').config()
const express = require('express')          
const app = express()
const port = 4000                       

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req, res) => {
    res.send('login into a insta account')
  })

  app.get('/twitter', (req, res) => {
    res.send('login into a twitter account')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})