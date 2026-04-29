import styles from './CategoryPanel.module.css';

function titleCase(st) {
  return st
    .toLowerCase()
    .split(' ')
    .reduce(
      (s, c) => s + '' + (c.charAt(0).toUpperCase() + c.slice(1) + ' '),
      '',
    );
}

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
          {titleCase(category)}
        </button>
      ))}
    </aside>
  );
}

export default CategoryPanel;
