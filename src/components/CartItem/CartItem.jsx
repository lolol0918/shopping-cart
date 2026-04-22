import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
function CartItem({ product }) {
  // import the CartContext
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>

      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'REMOVE_ITEM',
            payload: product.id,
          });
        }}
      >
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;
