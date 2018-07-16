const express = require("express")
const app = express()
const logger = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = process.env.load || 3001
const dotenv = require("dotenv").load()
const nodemailer = require("nodemailer")
const { GMAIL_USER, GMAIL_PASSWORD} = process.env
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/blog"
const usersRouter = require("./routes/users.js")
const blogsRouter = require("./routes/blog.js")

mongoose.connect(MONGODB_URI, (err)=>{
  console.log(err || "connected to mongodb")
})

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  console.log(req.body)
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
    
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.json({success:false, error});
    }
    else {
      res.json({success: true});
    }
  });
});
app.use(usersRouter)
app.use(blogsRouter)



app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})


app.listen(PORT, (err)=>{
  console.log(err || `server running on port ${PORT}`)
})