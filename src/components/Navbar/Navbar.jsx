import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Shop</h1>
      <ul className={styles.list}>
        <li>Home</li>
        <li>Shop</li>
        <li>Cart</li>
      </ul>
      <button type="button">🛒 Cart (0)</button>
    </nav>
  );
}
