/* eslint-disable camelcase, @typescript-eslint/no-non-null-assertion */
import React, { FC, useRef, useState } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<[User]>();

  const focusOninput = () => {
    inputRef.current!.focus();
  };

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
};

export default App;
