export const searchUser = (username) => {
  return async (dispatch, getState, githubAPI) => {
    const userData = await githubAPI.getUserData(username);
    const {
      login,
      avatar_url,
      html_url,
      name,
      location,
      email,
      bio,
      public_repos,
      followers,
    } = userData;

    const profileData = {
      username: login,
      profileLink: html_url,
      profileImgSrc: avatar_url,
      name,
      location,
      email,
      bio,
      publicRepos: public_repos,
      followers,
    };

    dispatch({ type: "USER_SEARCH", profile: profileData });
  };
};
