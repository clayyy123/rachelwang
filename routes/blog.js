const express = require("express")
const blogsRouter = new express.Router()
const verifyToken = require("../serverAuth.js").verifyToken

blogsRouter.route("/blog")
  .get(verifyToken)
  .post()