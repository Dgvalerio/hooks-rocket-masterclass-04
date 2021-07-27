/* eslint-disable camelcase */
import React, { FC, useCallback, useMemo, useState } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: FC = () => {
  const [users, setUsers] = useState<[User]>();

  const names = useMemo(
    () => users?.map((user) => user.name).join(', '),
    [users]
  );

  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), []);

  return <>?</>;
};

export default App;
