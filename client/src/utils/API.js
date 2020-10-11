import axios from "axios";

export default {
  // Gets all books from the Mongo DB
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves the selected book to the Mongo DB
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // External API call: gets book data based on search term
  getBookData: function({searchTerm}) {
    let query = "https://www.googleapis.com/books/v1/volumes?q=";
    let params = "&intitle";
    return axios.get(query + searchTerm + params);
  },
  // Deletes the book with the given id from the Mongo DB
  deleteBook: function(id) {
    return axios.delete("api/books/" + id);
  }

};
