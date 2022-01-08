import { createContext } from 'react';

const CartContext = createContext({
  // For auto-completion
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
