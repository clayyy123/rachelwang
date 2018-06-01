const express = require("express")
const app = express()
const logger = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = process.env.load || 3001
const dotenv = require("dotenv").load()
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/blog"
const usersRouter = require("./routes/users.js")
const blogsRouter = require("./routes/blog.js")

mongoose.connect(MONGODB_URI, (err)=>{
  console.log(err || "connected to mongodb")
})

app.use(logger("dev"))
app.use(bodyParser.json())


app.use(usersRouter)
app.use(blogsRouter)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})


app.listen(PORT, (err)=>{
  console.log(err || `server running on port ${PORT}`)
})