export const searchUser = (username) => {
  return async (dispatch, getState, { githubAPI, GithubDataFilter }) => {
    const cached = JSON.parse(localStorage.getItem(`/users/${username}`));

    if (cached) {
      const { profile: _profile, repos: _repos } = cached;
      return dispatch({
        type: "USER_SEARCH",
        profile: _profile,
        repos: _repos,
      });
    }

    const userData = await githubAPI.getUserData(username);
    const repos = await githubAPI.getRepos(username);
    const sortedRepos = githubAPI.sortReposByStars(repos, 6);
    const profileData = GithubDataFilter.filterUserData(userData);
    const reposData = await GithubDataFilter.filterReposData(sortedRepos);
    localStorage.setItem(
      `/users/${username}`,
      JSON.stringify({
        profile: profileData,
        repos: reposData,
      })
    );

    dispatch({ type: "USER_SEARCH", profile: profileData, repos: reposData });
  };
};
