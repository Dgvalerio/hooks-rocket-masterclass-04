import React, { FC, useContext } from 'react';

import CartContext from './CartContext';

const AppContext: FC = () => {
  const { products } = useContext(CartContext);

  return <ul>{products.map((product) => product.name)}</ul>;
};

export default AppContext;
