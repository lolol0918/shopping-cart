import { useEffect, useState } from 'react';
import { getProducts } from '../services/api.js';
import styles from './Shop.module.css';
import CategoryPanel from '../components/CategoryPanel/CategoryPanel.jsx';
import ProductCard from '../components/ProductCard/ProductCard.jsx';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // gets all unique categories
  const categories = ['all', ...new Set(products.map((p) => p.category))];

  //filters all products based on category
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);
  // better loading screen
  if (loading)
    return (
      <div className={styles.shopLayout}>
        <aside className={styles.panel} />
        <div className={styles.grid}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={styles.skeletonCard}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={styles.skeletonImg} />
              <div className={styles.skeletonInfo}>
                <div className={styles.skeletonLine} style={{ width: '40%' }} />
                <div className={styles.skeletonLine} style={{ width: '80%' }} />
                <div className={styles.skeletonLine} style={{ width: '30%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <div className={styles.shopLayout}>
      <CategoryPanel
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className={styles.grid}>
        {(filteredProducts || []).map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
