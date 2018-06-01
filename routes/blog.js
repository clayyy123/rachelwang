const express = require("express")
const blogsRouter = new express.Router()
const verifyToken = require("../serverAuth.js").verifyToken
const blogsCtrl = require("../controllers/blogs.js")

blogsRouter.get("/blogs", blogsCtrl.index)

blogsRouter.get("/blogs/:id", blogsCtrl.show)

blogsRouter.use(verifyToken)
blogsRouter.post("/blogs/new", blogsCtrl.create)

blogsRouter.patch("/blogs/update", blogsCtrl.update)

blogsRouter.delete("/blogs/delete", blogsCtrl.destroy)


module.exports = blogsRouter