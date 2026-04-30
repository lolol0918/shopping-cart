import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { ShoppingCart } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { state } = useContext(CartContext);
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>VANTA</h1>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
      <button type="button" className={styles.cartButton}>
        <ShoppingCart size={24} />
        <span className={styles.badge}>
          {state.cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </button>
    </nav>
  );
}
