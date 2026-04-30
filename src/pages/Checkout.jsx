import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import styles from './Checkout.module.css';

export default function Checkout() {
  const { state, dispatch } = useContext(CartContext);
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const cartTotal = state.cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleConfirm() {
    setConfirmed(true);
    dispatch({ type: 'CLEAR_CART' });
  }

  if (confirmed) {
    return (
      <div className={styles.page}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>
          <h1 className={styles.successTitle}>Order Confirmed</h1>
          <p className={styles.successSub}>
            Thanks for your order. Your items are on their way.
          </p>
          <Link to="/" className={styles.backBtn}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (state.cart.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.success}>
          <p className={styles.successSub}>Nothing to checkout.</p>
          <Link to="/shop" className={styles.backBtn}>
            Go Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        {/* ORDER SUMMARY */}
        <div className={styles.summary}>
          <p className={styles.eyebrow}>Order Summary</p>
          <div className={styles.items}>
            {state.cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImgWrap}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.itemImg}
                  />
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.title}</p>
                  <p className={styles.itemMeta}>Qty: {item.quantity}</p>
                </div>
                <p className={styles.itemPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.divider} />
          <div className={styles.row}>
            <span className={styles.rowLabel}>Subtotal</span>
            <span className={styles.rowValue}>${cartTotal.toFixed(2)}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Shipping</span>
            <span className={styles.free}>Free</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.total}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* CONFIRM */}
        <div className={styles.confirm}>
          <p className={styles.eyebrow}>Confirm Order</p>
          <p className={styles.confirmSub}>
            Review your items on the left and hit confirm when you're ready.
          </p>
          <button className={styles.confirmBtn} onClick={handleConfirm}>
            Confirm Order
          </button>
          <Link to="/cart" className={styles.backLink}>
            ← Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
