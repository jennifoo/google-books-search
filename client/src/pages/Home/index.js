// PAGE: HOME 

import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, SHOW_RESULTS } from "../../utils/actions";
import Header from "../../components/Header";
import API from "../../utils/API";

function Home() {
  const srchRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch({ type: LOADING });

    let searchRef = srchRef.current.value.split(" ").join("");
    console.log(searchRef); // Harry Potter

    function formatResult(res, callback) {
      // var response = res.data.items;
      // Array of 10 items
      let response = res.data.items.map(({volumeInfo}) => {
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
    API.getPostData({
      searchTerm: searchRef
    })
    .then(res => {

      console.log(res); // Array of 10 objects containing Harry Potter in title

      formatResult(res, function(responseArray) {
      dispatch({
        type: SHOW_RESULTS,
        searchResults: responseArray
      })
      console.log("responseArray: ");
      console.log(responseArray); // Array of 10 objects reduced to relevant state keys minus _id
    })
    }).catch(err => console.log(err));
  

  }

return (
<>
<main id="home" className="container-fluid">
    <Header />

    <div id="search" className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
            <input placeholder="Search" ref={srchRef} />
            <button type="submit">Enter</button>
            </form>
          </div>
    </div>

    <div className="row">

        <div className="col col-results">
            <h2>Results</h2>
            
              {state.searchResults.map(elem => (
                <div key={elem.title} className="result-div">
                  <div className="row">
                    <div className="col">
                      <h3>{elem.title}</h3>
                      <p>{elem.authors.map(elem => elem)}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <img src={elem.image} />
                    </div>
                    <div className="col-9">
                      <p>{elem.description}</p>
                      <p>{elem.link}</p>
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