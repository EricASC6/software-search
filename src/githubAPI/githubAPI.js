class GithubAPI {
  constructor() {
    this.rootAPI = "https://api.github.com";
    this.header = { Accept: "application/vnd.github.v3+json" };
    this.userAPI = this.rootAPI + "/users/";
    this.orgAPI = this.rootAPI + "/orgs/";
    this.reposAPI = (username) =>
      this.rootAPI + "/users/" + username + "/repos?per_page=100";
    this.orgReposAPI = (orgname) =>
      this.rootAPI + "/orgs/" + orgname + "/repos?per_page=100";
    this.commitActivityAPI = (username, reponame) =>
      this.rootAPI +
      "/repos/" +
      username +
      "/" +
      reponame +
      "/stats/participation";
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

  async getCommitActivity(username, reponame) {
    const query = this.commitActivityAPI(username, reponame);
    const response = await fetch(query, {
      headers: this.header,
    });

    const commitData = await response.json();
    return commitData;
  }

  async getOrg(orgname) {
    const query = this.orgAPI + orgname;

    const response = await fetch(query, {
      headers: this.header,
    });

    const orgData = await response.json();
    return orgData;
  }

  async getOrgRepos(orgname) {
    const query = this.orgReposAPI(orgname);

    const response = await fetch(query, {
      headers: this.header,
    });

    const orgRepos = await response.json();
    return orgRepos;
  }
}

export default GithubAPI;
