import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../features/cart/cartReducer.js";

//a global state container that lets components access and update data without prop drilling
const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
