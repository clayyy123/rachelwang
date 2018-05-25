const User = require("../models/User.js")
require("dotenv").config()
const signToken = require("../serverAuth.js").signToken
"user strict";

module.exports = {
  // creates a user
 create: (req, res)=>{
   User.create(req.body, (err, user)=>{
     if(err) return res.json({success: false, code:err.code})
     const token = signToken(user)
     res.json({sucess: true, message: "User created. Token attached.", token})
   })
 },
// updates a user
 update: (req,res)=>{
   User.findById(req.params.id, (err, user)=>{
     if(!req.body.password) delete req.body.password
     console.log(req.body)
     Object.assign(user, req.body)
     console.log(user)
     user.save((err, updatedUser)=>{
       if(err) console.log(err)
       res.json({success: true, message: "User updated", updatedUser})
     })
   })
 },
// logs in with right credentials
  authenticate: (req, res)=>{
    User.findOne({email: req.body.email}, (err,user)=>{
      if (!user || !user.validPassword(req.body.password)){
        return res.json({success:false, message:"Invalid credentials"})
      }
      const token = signToken(user)
			res.json({success: true, message: "Token attached.", token})
    })
  }
}