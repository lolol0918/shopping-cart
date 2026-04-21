import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
}
