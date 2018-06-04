const express = require("express")
const blogsRouter = new express.Router()
const verifyToken = require("../serverAuth.js").verifyToken
const blogsCtrl = require("../controllers/blogs.js")

blogsRouter.get("/api/blogs", blogsCtrl.index)

blogsRouter.get("/blogs/:id", blogsCtrl.show)


blogsRouter.use(verifyToken).post("/blogs/new", blogsCtrl.create)

blogsRouter.use(verifyToken).patch("/blogs/update/:id", blogsCtrl.update)

blogsRouter.use(verifyToken).delete("/blogs/delete/:id", blogsCtrl.destroy)


module.exports = blogsRouter