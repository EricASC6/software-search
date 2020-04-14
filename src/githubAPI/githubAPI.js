class GithubAPI {
  constructor() {
    this.rootAPI = "https://api.github.com";
    this.header = { Accept: "application/vnd.github.v3+json" };
    this.userAPI = this.rootAPI + "/users/";
  }

  async getUserData(username) {
    const query = this.userAPI + username;
    const response = await fetch(query, {
      headers: this.header,
    });

    const userData = await response.json();
    return userData;
  }
}

export default GithubAPI;
