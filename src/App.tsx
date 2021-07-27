/* eslint-disable camelcase, @typescript-eslint/no-non-null-assertion */
import React, { FC, useRef } from 'react';

import Form, { FormRef } from './Form';

const App: FC = () => {
  const formRef = useRef<FormRef>(null);

  const handleSubmit = () => {
    formRef.current?.submit();
  };

  return <Form ref={formRef} />;
};

export default App;
