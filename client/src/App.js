import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Save from "./pages/Save";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/saved">
            <Save />
          </Route>
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;