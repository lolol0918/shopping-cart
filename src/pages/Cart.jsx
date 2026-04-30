import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import CartItem from '../components/CartItem/CartItem.jsx';
import styles from './Cart.module.css';

export default function Cart() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);
  const cartTotal = state.cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (state.cart.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyText}>Your cart is empty.</p>
        <Link to="/shop" className={styles.continueShopping}>
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Your Cart</h1>
      <div className={styles.layout}>
        <div className={styles.items}>
          {state.cart.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
          <button
            className={styles.clearBtn}
            onClick={() => dispatch({ type: 'CLEAR_CART' })}
          >
            Clear Cart
          </button>
        </div>
        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span className={styles.free}>Free</span>
          </div>
          <div className={styles.summaryDivider} />
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button
            className={styles.checkoutBtn}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
          <Link to="/shop" className={styles.continueShopping}>
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
