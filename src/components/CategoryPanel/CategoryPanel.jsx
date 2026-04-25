import styles from './CategoryPanel.module.css';

function CategoryPanel({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <aside className={styles.panel}>
      <h3 className={styles.title}></h3>
      {categories.map((category) => (
        <button
          key={category}
          className={
            category === selectedCategory ? styles.active : styles.button
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </aside>
  );
}

export default CategoryPanel;
