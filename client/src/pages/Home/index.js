// PAGE: HOME 

import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { SHOW_RESULTS } from "../../utils/actions";
import Header from "../../components/Header";
import API from "../../utils/API";

function Home() {
  const srchRef = useRef();
  const [state, dispatch] = useStoreContext();
  const handleSearch = e => {
    e.preventDefault();
    // dispatch({ type: LOADING });
    let searchRef = srchRef.current.value.split(" ").join("");
    // console.log(searchRef); // Harry Potter
    function formatResult(res, callback) {
      // var response = res.data.items;
      // Array of 10 items
      let response = res.data.items.map(({volumeInfo}, indx) => {
        return {
        title: volumeInfo.title,
        authors: [volumeInfo.authors],
        description: volumeInfo.description,
        image: volumeInfo.imageLinks.smallThumbnail,
        link: volumeInfo.infoLink
      }})
      callback(response);
    }
    // MAKE API CALL USING SEARCH TERM
    API.getBookData({
      searchTerm: searchRef
    })
    .then(res => {
      // console.log(res); // Array of 10 objects containing Harry Potter in title
      formatResult(res, function(responseArray) {
      dispatch({
        type: SHOW_RESULTS,
        searchResults: responseArray
      })
      // console.log("responseArray: ", responseArray); // Array of 10 objects reduced to relevant state keys minus _id
    })
    }).catch(err => console.log(err));
  }

  const handleSave = (index) => {
    let saveItem = state.searchResults[index];
    console.log("Selected: ", saveItem);
    // STORE INTO MONGOOSE DB
    API.saveBook({
      title: saveItem.title,
      authors: saveItem.authors,
      description: saveItem.description,
      image: saveItem.image,
      link: saveItem.link
    })
    .then(result => {
      // console.log("Saved to DB: ", result);
      console.log("Sucessfully saved book.")
    })
    .catch(err => console.log(err));
  }

return (
<>
<main id="home" className="container-fluid">
    <Header />

    <div id="search" className="row">
          <div className="col">
            <form onSubmit={handleSearch}>
            <input placeholder="Search" ref={srchRef} />
            <button type="submit">Enter</button>
            </form>
          </div>
    </div>

    <div className="row">

        <div className="col col-results">
            <h2>Results</h2>
            
              {state.searchResults.map((elem, index) => (
                <div key={elem.title} className="result-div">
                  <div className="row">
                    <div className="col-9">
                      <h3>{elem.title}</h3>
                      <p>{elem.authors.map(elem => elem)}</p>
                    </div>
                    <div id="result-button" className="col-3">
                      <a className="button" target="_blank" href={elem.link}>View</a>
                      <button onClick={() => handleSave(index)}>Save</button>
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

)}

export default Home;