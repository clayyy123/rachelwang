const express = require("express")
const usersRouter = new express.Router()
const userCtrl = require("../controllers/users.js")
const verifyToken = require("../serverAuth.js").verifyToken

usersRouter.post("/new",usersCtrl.create)

usersRouter.post("/authenticate", usersCtrl.authenticate)

usersRouter.use(verifyToken)

usersRouter.patch("/update", usersCtrl.update)

module.exports = usersRouter

