// HOME INDEX

import React, { useRef } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { LOADING } from "../../utils/actions";
import Header from "../../components/Header";
import API from "../../utils/API";

function Home() {
  const srchRef = useRef();
  // const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch({ type: LOADING });
    let searchRef = srchRef.current.value.split(" ").join("");
    API.getPostData({
      // MAKE API CALL USING SEARCH TERM
      searchTerm: searchRef,
    })
    .then(res => {
      // FORMAT THE RES TO STORE INTO STATE (without _id)
      
      // var response = res.data.items;
      // Array of 10 items
      var response = res.data.items.map(({volumeInfo}) => {
        return {
        title: volumeInfo.title,
        authors: [volumeInfo.authors],
        description: volumeInfo.description,
        image: volumeInfo.imageLinks.smallThumbnail,
        link: volumeInfo.infoLink
      }
      })

    })
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

        <div className="col-6 col-results">
            <h2>Results</h2>
        </div>

        <div className="col-6 col-save">
            <h2>Saved books</h2>
        </div>

    </div>

</main>
</>
)
}

export default Home;