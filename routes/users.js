const express = require("express")
const usersRouter = new express.Router()
const userCtrl = require("../controllers/users.js")
const verifyToken = require("../serverAuth.js").verifyToken

usersRouter.post("/user/new", userCtrl.create)

usersRouter.post("/authenticate", userCtrl.authenticate)

usersRouter.use(verifyToken)

usersRouter.patch("/user/update", userCtrl.update)

module.exports = usersRouter

