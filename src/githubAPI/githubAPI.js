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
    try {
      const query = this.reposAPI(username);
      const response = await fetch(query, {
        headers: this.header,
      });

      let totalRepos = [];

      const repos = await response.json();
      totalRepos.push(...repos);

      const headers = response.headers;
      let link = headers.get("link");

      if (!link) return totalRepos;

      link = link.split(",");
      console.log(link);
      const pages = parseInt(link[1].match(/&page=(\d+).*$/)[1]);
      console.log(pages);

      for (let i = 0; i < pages - 1; i++) {
        let next = link.find((l) => l.match(/rel="next"/));

        let pagQuery = next.match(/<.+>/)[0];
        pagQuery = pagQuery.slice(1, pagQuery.length - 1);

        const pagResponse = await fetch(pagQuery);
        const data = await pagResponse.json();
        totalRepos.push(...data);

        link = pagResponse.headers.get("link").split(",");
      }

      return totalRepos;
    } catch (err) {
      return err;
    }
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

    let totalRepos = [];

    const repos = await response.json();
    totalRepos.push(...repos);

    const headers = response.headers;
    let link = headers.get("link");

    if (!link) return totalRepos;

    link = link.split(",");
    console.log(link);
    const pages = parseInt(link[1].match(/&page=(\d+).*$/)[1]);
    console.log(pages);

    for (let i = 0; i < pages - 1; i++) {
      let next = link.find((l) => l.match(/rel="next"/));

      let pagQuery = next.match(/<.+>/)[0];
      pagQuery = pagQuery.slice(1, pagQuery.length - 1);

      const pagResponse = await fetch(pagQuery);
      const data = await pagResponse.json();
      totalRepos.push(...data);

      link = pagResponse.headers.get("link").split(",");
    }

    return totalRepos;
  }
}

export default GithubAPI;
