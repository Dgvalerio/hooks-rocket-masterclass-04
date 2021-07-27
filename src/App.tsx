/* eslint-disable camelcase */
import React, { FC, useState } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: FC = () => {
  const [user, setUser] = useState<User>();

  const loadData = async () => {
    const response = await fetch('https://api.github.com/users/diego3g');
    const data = await response.json();

    setUser(data);
  };

  (() => {
    if (!user) loadData();
  })();

  return <div>User: {user?.login}</div>;
};

export default App;
