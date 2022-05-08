//modules
const express = require('express')

require('dotenv').config({path:'./config/.env'})
require('./config/db')

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

})

// route

// server
app.listen(process.env.PORT, () => {
  console.log('listening on port '+ process.env.PORT)
})
