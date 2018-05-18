const express = require("express")
const app = express()
const logger = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = 3001



app.listen(PORT, (err)=>{
  console.log(err || `app running on port ${PORT}`)
})