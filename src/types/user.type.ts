export type User = {
  avatar_url: string;
  bio: string | null;
  login: string;
  name: string;
};
export type Repository = {
  html_url: string;
  id: number;
  name: string;
  stargazers_count: number;
};
export type UserData = User & { repositories: Repository[] };
