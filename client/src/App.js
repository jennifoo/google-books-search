/*

&key=yourAPIKey
Google Books API endpoint: https://www.googleapis.com/books/v1/volumes?q=search+terms&intitle

React-based Google Search App

Node
Express (Save POST)
MongoDB
React lifecycle methods
User Search (uncontrolled, upon user submit)
Action/Dispatch (SavePOST, Delete, ViewPost, DisplayGET, )

---

SEARCH
Search via Google Books API - render (View/Save)

SAVE
Render all saved books in the MongoDB (View/Delete)
Delete removes from MongoDB

*/

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
// import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/* <Route exact path="/post/:id">
<Post />
</Route> */