import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api.js';
import styles from './Home.module.css';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProducts();
        setFeatured(data.slice(0, 4));
        const unique = [...new Set(data.map((p) => p.category))];
        setCategories(unique);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Everything. All at once.</p>
          <h1 className={styles.heroTitle}>
            Shop without
            <br />
            <span className={styles.heroAccent}>the noise.</span>
          </h1>
          <p className={styles.heroSub}>
            Electronics, jewelry, clothing and more — all in one place, no
            fluff.
          </p>
          <div className={styles.heroBtns}>
            <Link to="/shop" className={styles.btnPrimary}>
              Shop Now
            </Link>
            <Link to="/shop" className={styles.btnOutline}>
              Browse All
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Featured Products</p>
          <Link to="/shop" className={styles.seeAll}>
            See all →
          </Link>
        </div>
        {loading ? (
          <div className={styles.skeletonGrid}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.skeleton} />
            ))}
          </div>
        ) : (
          <div className={styles.productGrid}>
            {featured.map((item, index) => (
              <div
                key={item.id}
                className={styles.productCard}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={styles.productImgWrap}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.productImg}
                  />
                </div>
                <div className={styles.productInfo}>
                  <p className={styles.productCategory}>{item.category}</p>
                  <h3 className={styles.productName}>{item.title}</h3>
                  <p className={styles.productPrice}>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CATEGORIES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Shop by Category</p>
        </div>
        {loading ? (
          <div className={styles.catGrid}>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={styles.skeleton}
                style={{ height: '80px' }}
              />
            ))}
          </div>
        ) : (
          <div className={styles.catGrid}>
            {categories.map((cat) => (
              <Link to="/shop" key={cat} className={styles.catCard}>
                <span className={styles.catLabel}>{cat}</span>
                <span className={styles.catArrow}>→</span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
