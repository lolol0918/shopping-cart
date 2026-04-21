import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { state } = useContext(CartContext);
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Shop</h1>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </ul>
      <button type="button">
        🛒 Cart ({state.cart.reduce((total, item) => total + item.quantity, 0)})
      </button>
    </nav>
  );
}
