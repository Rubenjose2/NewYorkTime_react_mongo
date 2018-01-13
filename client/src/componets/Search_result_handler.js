import React, { Component } from "react";
import Search from "./Search";
import API from "../utils/API/api";
import Results from "./Results";

class Search_Results extends Component {
  state = {
    Topic: "",
    Year_start: "",
    Year_end: "",
    Results: []
  };
  // Handle the change inside the Form
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // This function handle the Submition of the form
  handleFormSubmit = event => {
    event.preventDefault();
    API.search("Hugo Chavez")
      .then(res => this.setState({ Results: res.data.response.docs }))
      .catch(err => console.log(err));

    console.log(this.state);
  };

  //This Handle the connection to the API

  render() {
    return (
      <Search
        Topic={this.state.Topic}
        Year_start={this.state.Year_start}
        Year_end={this.state.Year_end}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}
export default Search_Results;
