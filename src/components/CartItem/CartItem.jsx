import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import styles from './CartItem.module.css';

function CartItem({ product }) {
  // import the CartContext
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />

      <div className={styles.info}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>${product.price}</p>
      </div>

      <div className={styles.controls}>
        <button
          onClick={() =>
            dispatch({
              type: 'UPDATE_QUANTITY',
              payload: {
                id: product.id,
                quantity: Math.max(1, product.quantity - 1),
              },
            })
          }
        >
          -
        </button>

        <span>{product.quantity}</span>

        <button
          onClick={() =>
            dispatch({
              type: 'UPDATE_QUANTITY',
              payload: {
                id: product.id,
                quantity: product.quantity + 1,
              },
            })
          }
        >
          +
        </button>
      </div>

      <div className={styles.total}>
        ${(product.price * product.quantity).toFixed(2)}
      </div>

      <button
        className={styles.remove}
        onClick={() =>
          dispatch({
            type: 'REMOVE_ITEM',
            payload: product.id,
          })
        }
      >
        ✕
      </button>
    </div>
  );
}

export default CartItem;
