import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileCard from "./profile/ProfileCard";
import Repos from "./repos/Repos";
import Charts from "./charts/Charts";
import { searchUser } from "./../../actions/githubActions";
import "../css/search-result/searchResult.css";

class SearchResult extends Component {
  state = {
    currentRepo: 0,
    numRepos: 6,
    repos: [1, 2, 3, 4, 5, 6],
  };

  moveToNextRepo = () => {
    this.setState({
      ...this.state,
      currentRepo:
        this.state.currentRepo === this.state.numRepos - 1
          ? 0
          : this.state.currentRepo + 1,
    });
  };

  moveToPrevRepo = () => {
    this.setState(
      {
        ...this.state,
        currentRepo:
          this.state.currentRepo === 0
            ? this.state.numRepos - 1
            : this.state.currentRepo - 1,
      },
      () => console.log(this.state)
    );
  };

  componentDidMount() {
    const url = this.props.match.url;
    const [, type, value] = url.split("/");

    switch (type) {
      case "user":
        this.props.searchUser(value);
        break;
      default:
        return;
    }
  }

  render() {
    const { moveToNextRepo, moveToPrevRepo } = this;
    const { profile, repos } = this.props;
    const { numRepos, currentRepo } = this.state;

    return (
      <div className="search-result">
        <div className="search-result-container container">
          <div className="search-top">
            <ProfileCard profile={profile} />
            <Repos
              repos={repos}
              numRepos={numRepos}
              currentRepo={currentRepo}
              moveToNextRepo={moveToNextRepo}
              moveToPrevRepo={moveToPrevRepo}
            />
          </div>
          <Charts />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.github.profile,
    repos: state.github.repos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (username) => dispatch(searchUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
