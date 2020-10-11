// Component: Header

import React from "react";
import { Link } from "react-router-dom";

function Header() {
return (
        <>
        <div id="view-saved" className="row">
              <div className="col">
                <Link to="/" style={{marginRight: "50px"}}>Results</Link>
                <Link to="/saved">View Saved Books</Link>
              </div>
        </div>
        <header className="row">
            <div className="col">
                <h1>Google Books Search</h1>
                <p>Search for and Save Books of Interest</p>
            </div>
        </header>
        </>
)
}

export default Header;