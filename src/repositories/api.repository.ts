import { httpService } from '../services/http.service';
import { Repository, User } from '../types/user.type';

export const apiRepository = {
  getUserInfo: (login: User['login']): Promise<User> =>
    httpService.request(`users/${login}`),
  getUserRepos: (login: User['login']): Promise<Repository[]> =>
    httpService.request(`users/${login}/repos`),
};
