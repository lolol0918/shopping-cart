import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);
  // set a local state that handles the quantity that is added to the cart
  const [qty, setQty] = useState(1);

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />

      <h2 className={styles.name}>{product.name}</h2>

      <p className={styles.price}>${product.price}</p>

      <div className={styles.qtyControls}>
        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)}>+</button>
      </div>

      <button
        className={styles.addBtn}
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
