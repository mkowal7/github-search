import React from 'react';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
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

let element: Element | null = null;

describe('UserInfo', () => {
  beforeEach(() => {
    const data: UserData = {
      avatar_url: 'https://avatars0.githubusercontent.com/u/67189811?v=4',
      bio: '',
      login: 'mkowal7',
      name: 'Michał Kowal',
      repositories: generateRepositoryList(10),
    };
    const { container } = render(<UserInfo data={data} />);

    element = container;
  });

  afterEach(() => {
    if (!element) {
      return;
    }

    unmountComponentAtNode(element);
    element.remove();
    element = null;
  });

  test('repositories are sorted by stars', async () => {
    if (!element) {
      return;
    }

    const list = element.querySelector('[data-test="repository-list"]');

    expect(list?.childNodes[0].textContent).toEqual('Repository 10');
    expect(list?.childNodes[2].textContent).toEqual('Repository 8');
  });

  test('list is limited', async () => {
    if (!element) {
      return;
    }

    const list = element.querySelector('[data-test="repository-list"]');

    expect(list?.childNodes.length).toEqual(3);
  });
});
