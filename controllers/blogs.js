const Blog = require("../models/Blog.js")

module.exports = {
  index: (req,res)=>{
    Blog.find({}).sort({createdDate: -1}).exec((err, allMatches)=>{ 
      if (err) return err
      res.json(allMatches)
    })
  },

  show:(req,res)=>{
    Blog.findById(req.params.id, (err, datBlog)=>{
      if (err) return err
      res.json(datBlog)
    })
  },

  create: (req,res)=>{
    Blog.create(req.body, (err, newBlog)=>{
      if (err) return ({success: false, mesasge:"error in blog creation", err})
      res.json(newBlog)
    })
  },

  update: (req,res)=>{
    Blog.findById(req.params.id, (err, theBlog)=>{
      Object.assign(theBlog, req.body)
      theBlog.save((err, updatedBlog)=>{
        if (err) console.log(err)
        res.json({success: true, message:"Blog updated", updatedBlog})
      })
    })
  },

  destroy: (req,res)=>{
    Blog.findByIdAndRemove(req.params.id, (err, deletedBlog)=>{
      res.json({message: "blog deleted", success: true, blog: deletedBlog})
    })
  }
}