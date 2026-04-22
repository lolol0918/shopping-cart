import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import CartItem from '../components/CartItem/CartItem.jsx';

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      {state.cart.map((product) => (
        <CartItem product={product} key={product.id}></CartItem>
      ))}
    </>
  );
}
