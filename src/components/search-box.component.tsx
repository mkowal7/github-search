import React, { ChangeEvent, FormEvent, useState } from 'react';
import { apiRepository } from '../repositories/api.repository';
import { UserData } from '../types/user.type';

type Props = {
  setData: (data: UserData | null) => void;
  setFetching: (isFetching: boolean) => void;
};

function SearchBox({ setFetching, setData }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setFetching(true);

    try {
      const user = await apiRepository.getUserInfo(value);
      const repositories = await apiRepository.getUserRepos(value);

      setData({ ...user, repositories });
      setFetching(false);
    } catch (e) {
      setData(null);
      setError('User not found.');
      setFetching(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <input
          onChange={handleChange}
          placeholder="Search for users"
          type="search"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default SearchBox;
