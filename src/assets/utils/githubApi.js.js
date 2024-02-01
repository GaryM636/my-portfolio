// githubApi.js
const GITHUB_API_URL = 'https://api.github.com';

export const getGitHubRepos = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};
