import React, { useMemo } from 'react';
import { UserData } from '../types/user.type';

type Props = {
  data: UserData;
};

const REPOSITORIES_LIMIT = 3;

function UserInfo({ data }: Props) {
  const repositories = useMemo<UserData['repositories']>(
    () =>
      data.repositories
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, REPOSITORIES_LIMIT),
    [data.repositories],
  );

  return (
    <div className="user-information">
      <div className="user-details">
        <img alt={data.name} src={data.avatar_url} width={90} height={90} />
        <div className="user-details__name">
          <h1>{data.name}</h1>
          {data.bio}
        </div>
      </div>
      {repositories.length > 0 && (
        <div className="user-repositories">
          <h2>Top repositories</h2>
          <ul data-test="repository-list">
            {repositories.map(({ id, html_url, name }) => (
              <li key={id}>
                <a href={html_url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
