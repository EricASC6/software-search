let initState = {
  type: null,
  profile: null,
};

const githubReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_SEARCH":
      console.log("USER_SEARCH");
      console.log(action.profile);
      return {
        ...state,
        type: "user",
        profile: action.profile,
      };

    default:
      return state;
  }
};

export default githubReducer;