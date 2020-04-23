let initState = {
  type: null,
  profile: null,
  repos: null,
  err: null,
};

const githubReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_SEARCH":
      console.log("USER_SEARCH");
      console.log(action.repos);
      console.log(action.profile);
      return {
        ...state,
        type: "user",
        profile: action.profile,
        repos: action.repos,
        numRepos: action.repos.length,
      };

    case "ORG_SEARCH":
      console.log("ORG_sEARCH");
      console.log(action.repos);
      console.log(action.profile);
      return {
        ...state,
        type: "org",
        profile: action.profile,
        repos: action.repos,
        numRepos: action.repos.length,
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        err: action.err,
      };
    default:
      return state;
  }
};

export default githubReducer;
