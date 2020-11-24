import React, { useEffect, useState } from 'react';
import { User } from '../types/user.type';

type Props = {
  data: User;
};

const REPOSITORIES_LIMIT = 3;

function UserInfo({ data }: Props) {
  const [repositories, setRepositories] = useState<User['repositories']>([]);

  useEffect(() => {
    const repositories = data.repositories
      .sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count) return 1;
        else if (a.stargazers_count < b.stargazers_count) return -1;
        return 0;
      })
      .splice(0, REPOSITORIES_LIMIT);

    setRepositories(repositories);
  }, [data.repositories, setRepositories]);

  return (
    <div className="user-information">
      <div className="user-details">
        <div className="user-details__name">
          <img alt={data.name} src={data.avatar_url} width={60} height={60} />
          <h1>{data.name}</h1>
        </div>
        {data.bio}
      </div>
      {repositories.length > 0 && (
        <div className="user-repositories">
          <h2>Top repositories</h2>
          <ul>
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
