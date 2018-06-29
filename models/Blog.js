const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: {type: String},
  body: {type: String},
  imageURL: {type:String},
  isActive: {type: Boolean, default: false},
  createdDate: { type: Date, default: Date.now },
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog