import React, { ChangeEvent, FormEvent, useState } from 'react';
import { apiRepository } from '../repositories/api.repository';
import { UserData } from '../types/user.type';

type Props = {
  setData: (data: UserData) => void;
  setFetching: (isFetching: boolean) => void;
};

function SearchBox({ setFetching, setData }: Props) {
  const [value, setValue] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFetching(true);

    try {
      const user = await apiRepository.getUserInfo(value);
      const repositories = await apiRepository.getUserRepos(value);

      setData({ ...user, repositories });
      setFetching(false);
    } catch (e) {
      setFetching(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        onChange={handleChange}
        placeholder="Search for users"
        type="search"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
