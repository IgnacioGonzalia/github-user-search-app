import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: boolean;
  bio?: string;
  twitter_username?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const fetchUser = async (username: string): Promise<GitHubUser> => {
  try {
    const { data } = await axios.get<GitHubUser>(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching user.", error);
    throw error;
  }
};
