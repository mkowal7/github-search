import React from 'react';
import { render } from '@testing-library/react';
import { UserData } from '../types/user.type';
import UserInfo from './user-info.component';

const generateRepositoryList = (length: number): UserData['repositories'] =>
  Array.from({ length }).map((_, i) => {
    const index = i + 1;

    return {
      id: index,
      name: `Repository ${index}`,
      stargazers_count: index * 10,
      html_url: 'https://github.com',
    };
  });

describe('UserInfo', () => {
  const data: UserData = {
    avatar_url: 'https://avatars0.githubusercontent.com/u/67189811?v=4',
    bio: '',
    login: 'mkowal7',
    name: 'Michał Kowal',
    repositories: generateRepositoryList(10),
  };
  const { container } = render(<UserInfo data={data} />);

  test('repositories are sorted by stars', async () => {
    const element = container.querySelector('[data-test="repository-list"]');

    expect(element?.childNodes[0].textContent).toEqual('Repository 10');
    expect(element?.childNodes[2].textContent).toEqual('Repository 8');
  });
});
