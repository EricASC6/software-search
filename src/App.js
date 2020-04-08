import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBarContainer from "./components/search-bar/SearchBarContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <SearchBarContainer />
      </div>
    );
  }
}

export default App;
