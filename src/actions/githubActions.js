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
    const sortedRepos = githubAPI.sortReposByStars(repos, 3);
    const profileData = GithubDataFilter.filterUserData(userData);
    let reposData = await GithubDataFilter.filterReposData(sortedRepos);
    reposData = await Promise.all(
      reposData.map(async (repo) => {
        const commitActivity = await githubAPI.getCommitActivity(
          username,
          repo.name
        );
        return { ...repo, commitActivity: commitActivity.all };
      })
    );

    // Caching result
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
