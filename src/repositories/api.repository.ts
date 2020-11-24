import { httpService } from '../services/http.service';
import { RESTRepository, RESTUser } from '../types/user.type';

export const apiRepository = {
  getUserInfo: (
    login: RESTUser['login'],
  ): Promise<[RESTUser, RESTRepository[]]> => {
    const url = `users/${login}`;

    return Promise.all<RESTUser, RESTRepository[]>([
      httpService.request(url),
      httpService.request(`${url}/repos`),
    ]);
  },
};
