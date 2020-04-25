import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SearchBarContainer from "./components/search-bar/SearchBarContainer";
import SearchResult from "./components/search-result/SearchResult";
import NotFound from "./components/search-result/NotFound";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBarContainer} />
            <Route path="/user/:user" component={SearchResult} />
            <Route path="/org/:org" component={SearchResult} />
            <Route path="/error" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
