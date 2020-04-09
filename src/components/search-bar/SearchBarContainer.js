import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

class SearchBarContainer extends Component {
  state = {
    type: this.props.searchTypes[0],
    searchValue: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searchValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/user/eric");
    console.log(this.state);
  };

  changeType = (type) => {
    this.setState({
      ...this.state,
      type: type,
    });
  };

  toggleSearchTypes = () => {
    this.setState({
      ...this.state,
      searchTypesVisible: this.state.searchTypesVisible ? false : true,
    });
  };

  render() {
    const { changeType, handleChange, handleSubmit, toggleSearchTypes } = this;
    const { type } = this.state;
    const { searchTypes } = this.props;

    return (
      <div className="search">
        <div className="searchbar-container container">
          <div className="search-head">
            <h2>Your search for exciting software begins here.</h2>
          </div>
          <SearchBar
            type={type}
            searchTypes={searchTypes}
            changeType={changeType}
            toggleSearchTypes={toggleSearchTypes}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTypes: state.searchTypes,
  };
};

export default connect(mapStateToProps)(SearchBarContainer);
