export type User = {
  avatar_url: string;
  login: string;
  name: string;
  bio?: string;
};
export type Repository = {
  html_url: string;
  id: number;
  name: string;
  stargazers_count: number;
};
export type UserData = User & { repositories: Repository[] };
