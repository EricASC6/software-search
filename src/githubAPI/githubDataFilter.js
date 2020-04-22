class GithubDataFilter {
  static filterUserData(userData) {
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

    return profileData;
  }

  static async filterReposData(repos) {
    return await Promise.all(
      repos.map(async (repo) => {
        const {
          id,
          name,
          description,
          stargazers_count,
          watchers_count,
          forks_count,
          languages_url,
        } = repo;

        const languages = await fetch(languages_url);
        const languagesData = await languages.json();

        return {
          id,
          name,
          description,
          stars: stargazers_count,
          watches: watchers_count,
          forks: forks_count,
          languages: languagesData,
        };
      })
    );
  }

  static filterOrgData(orgData) {
    const {
      login,
      avatar_url,
      html_url,
      name,
      location,
      email,
      description,
      public_repos,
      followers,
    } = orgData;

    const data = {
      username: login,
      profileLink: html_url,
      profileImgSrc: avatar_url,
      name,
      location,
      email,
      bio: description,
      publicRepos: public_repos,
      followers,
    };

    return data;
  }
}

export default GithubDataFilter;
