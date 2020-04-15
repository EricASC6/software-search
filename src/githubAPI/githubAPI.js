class GithubAPI {
  constructor() {
    this.rootAPI = "https://api.github.com";
    this.header = { Accept: "application/vnd.github.v3+json" };
    this.userAPI = this.rootAPI + "/users/";
    this.reposAPI = (username) =>
      this.rootAPI + "/users/" + username + "/repos";
  }

  async getUserData(username) {
    const query = this.userAPI + username;
    const response = await fetch(query, {
      headers: this.header,
    });

    const userData = await response.json();
    return userData;
  }

  async getRepos(username) {
    const query = this.reposAPI(username);
    const response = await fetch(query, {
      headers: this.header,
    });

    const repos = await response.json();
    return repos;
  }

  sortReposByStars(repos, count) {
    const length = repos.length;
    const sortedRepos = repos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );

    return length >= count ? sortedRepos.slice(0, count) : sortedRepos;
  }
}

export default GithubAPI;
