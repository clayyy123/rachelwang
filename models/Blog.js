const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: {type: String},
  body: {type: String},
  imageURL: {type:String}
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog