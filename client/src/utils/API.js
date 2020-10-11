/*
&key=yourAPIKey
Google Books API endpoint: https://www.googleapis.com/books/v1/volumes?q=search+terms&intitle
*/

import axios from "axios";

export default {

  // getPosts: function() {
  //   return axios.get("/api/posts");
  // },

  // getPost: function(id) {
  //   return axios.get("/api/posts/" + id);
  // },

  // deletePost: function(id) {
  //   return axios.delete("/api/posts/" + id);
  // },

  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  },

  getPostData: function({searchTerm}) {
    let query = "https://www.googleapis.com/books/v1/volumes?q=";
    let params = "&intitle";
    return axios.get(query + searchTerm + params);
  }
};
