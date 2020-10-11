import axios from "axios";

export default {
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  },
  getPostData: function({searchTerm}) {
    let query = "https://www.googleapis.com/books/v1/volumes?q=";
    let params = "&intitle";
    return axios.get(query + searchTerm + params);
  }
};
