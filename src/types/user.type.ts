export type RESTUser = {
  avatar_url: string;
  login: string;
  name: string;
  bio?: string;
};
export type RESTRepository = {
  html_url: string;
  id: number;
  name: string;
  stargazers_count: number;
};
export type User = RESTUser & { repositories: RESTRepository[] };
