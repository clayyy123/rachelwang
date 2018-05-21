const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: {type: string},
  imageURL: {type:string}
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog