class Github {
	constructor() {
			this.client_id = 'a3ac15e623fa3ece03cb';
			this.client_secret = '7e89c580ccb79b6a462ddac2f4697884dda2723f';
			this.repos_count = 5;
			this.repos_sort = 'created: asc';
	}

	async getUser(user) {
			const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

			const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

			const profile = await profileResponse.json();
			const repos = await repoResponse.json();

			return {
					profile,
					repos
			}
	}
}