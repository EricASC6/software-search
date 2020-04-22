import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SearchBarContainer from "./components/search-bar/SearchBarContainer";
import SearchResult from "./components/search-result/SearchResult";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBarContainer} />
            <Route exact path="/user/:user" component={SearchResult} />
            <Route exact path="/org/:org" component={SearchResult} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
