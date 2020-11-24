import React, { useState } from 'react';
import SearchBox from './components/search-box.component';
import UserInfo from './components/user-info.component';
import { User } from './types/user.type';

function App() {
  const [data, setData] = useState<User | null>(null);
  const [isFetching, setFetching] = useState(false);

  return (
    <div className="container">
      <SearchBox setData={setData} setFetching={setFetching} />
      {data && <UserInfo data={data} />}
      {isFetching && <div className="loader" />}
    </div>
  );
}

export default App;
