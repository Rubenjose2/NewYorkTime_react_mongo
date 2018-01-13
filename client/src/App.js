import React, { Component } from "react";
import "./App.css";
import SearchResult from "./componets/Search_result_handler";
import Results from "./componets/Results";
import Saved from "./componets/Saved";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>New York Time Article Scrubber</h1>
        </div>

        <div className="container">
          <SearchResult />
          <Results />
          <Saved />
        </div>
      </div>
    );
  }
}

export default App;
