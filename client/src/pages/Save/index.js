// PAGE: SAVE

import React from "react";
import Header from "../../components/Header"
import API from "../../utils/API"
import { useStoreContext } from "../../utils/GlobalState";
import { SHOW_SAVED, DELETE_BOOK } from "../../utils/actions";

function Save() {
  const [ state, dispatch ] = useStoreContext();

  API.getBooks()
  .then(results => {
    // console.log("Get Books: ", results.data);
    dispatch({
      type: SHOW_SAVED,
      books: results.data
    })
  })
  .catch(err => console.log(err));

  const handleDelete = (_id) => {
    API.deleteBook(_id)
    .then(results => {
      dispatch({
        type: DELETE_BOOK,
        _id: _id
      })
    })
  }

return (
<>
<main id="post" className="container-fluid">
    <Header />

    <div className="row">

    <div className="col col-results">
        <h2>Saved Books</h2>
        
          {state.books.map((elem) => (
            <div key={elem.title} className="result-div">
              <div className="row">
                <div className="col-9">
                  <h3>{elem.title}</h3>
                  <p>{elem.authors.map(elem => elem)}</p>
                </div>
                <div id="result-button" className="col-3">
                  <a className="button" target="_blank" href={elem.link}>View</a>
                  <button onClick={() => handleDelete(elem._id)}>Delete</button>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <img src={elem.image} />
                </div>
                <div className="col-9">
                  <p>{elem.description}</p>
                </div>
              </div>
            </div>
          ))}
 
    </div>
    </div>
    
</main>
</>
)
}

export default Save;