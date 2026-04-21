import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <div>
        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)}>+</button>
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'ADD_ITEM',
            payload: { ...product, quantity: qty },
          });
          setQty(1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
