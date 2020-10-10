const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  authors: [
    String
  ],
  description: String,
  image: "",
  link: "",
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Book = mongoose.model("Book", postSchema);

module.exports = Book;
