import React from "react";
import Header from "../../components/Header"

function Home() {
return (
<>
<main id="home" className="container-fluid">
    <Header />

    <div id="search" className="row">
          <div className="col">
            <input placeholder="Search" />
            <button type="submit">Enter</button>
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