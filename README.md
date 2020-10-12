# Google Books Search Application

Technologies: React, Express, Node, MongoDB

This application is built with React and is integrated with the Google Books API to allow users to search for books in the Google database and then save them in the application to view later or delete if needed.

## View Application:

* [Heroku Link: https://jenn-google-books-search-mern.herokuapp.com/](https://jenn-google-books-search-mern.herokuapp.com/)
<img src ="./images/employee-directory.png" alt="employee directory using React">

## Technical Components Include:
* React components
* React lifecycle methods to query and display books based on user searches
* Helper/Util functions

## Details
* Results Page: User can search for books via the Google Books API and render them on the homepage. The user has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.
* View Saved Books Page: Renders all books saved to the Mongo database. The user has an option to "View", or "Delete" a book, removing it from the Mongo database.
