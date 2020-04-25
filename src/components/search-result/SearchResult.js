import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileCard from "./profile/ProfileCard";
import Repos from "./repos/Repos";
import Charts from "./charts/Charts";
import { searchUser, searchOrg } from "./../../actions/githubActions";
import "../css/search-result/SearchResult.css";

class SearchResult extends Component {
  state = {
    currentRepo: 0,
    numRepos: 0,
    found: false,
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
    this.setState({
      ...this.state,
      currentRepo:
        this.state.currentRepo === 0
          ? this.state.numRepos - 1
          : this.state.currentRepo - 1,
    });
  };

  componentDidMount() {
    const url = this.props.match.url;
    const [, type, value] = url.split("/");

    switch (type) {
      case "user":
        this.props.searchUser(value);
        break;
      case "org":
        console.log("searching for an org");
        this.props.searchOrg(value);
        break;
      default:
        return;
    }
  }

  componentDidUpdate(prevProps) {
    const url = this.props.match.url;
    const [, , value] = url.split("/");
    if (
      !prevProps.github.profile ||
      prevProps.github.profile.username !== value
    ) {
      if (this.props.github.err) return this.props.history.push("/error");

      this.setState({
        github: this.props.github,
        numRepos: this.props.github.numRepos,
        found: true,
      });
    }
  }

  render() {
    if (!this.state.found) return <div className="loading">Loading</div>;

    const { moveToNextRepo, moveToPrevRepo } = this;
    const { profile, repos } = this.props.github;
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
          <Charts repos={repos} currentRepo={currentRepo} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { profile, repos, numRepos, err } = state.github;
  return {
    github: {
      profile,
      repos,
      numRepos,
      err,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (username) => dispatch(searchUser(username)),
    searchOrg: (orgname) => dispatch(searchOrg(orgname)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
