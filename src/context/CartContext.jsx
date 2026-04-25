import { createContext, useReducer, useEffect } from 'react';
import { cartReducer, initialState } from '../features/cart/cartReducer.js';

//a global state container that lets components access and update data without prop drilling
export const CartContext = createContext();

function getInitialCart() {
  const cached = localStorage.getItem('cart');

  if (cached) {
    return JSON.parse(cached);
  }

  return initialState;
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, getInitialCart());

  //changes the localStorage every time the state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
