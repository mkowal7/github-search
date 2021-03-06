import React, { useState } from 'react';
import SearchBox from './components/search-box.component';
import UserInfo from './components/user-info.component';
import { UserData } from './types/user.type';

function App() {
  const [data, setData] = useState<UserData | null>(null);
  const [isFetching, setFetching] = useState(false);

  return (
    <div className="container">
      <SearchBox setData={setData} setFetching={setFetching} />
      {data && <UserInfo data={data} />}
      {isFetching && (
        <div className="loader">
          <span className="spinner" />
        </div>
      )}
    </div>
  );
}

export default App;
