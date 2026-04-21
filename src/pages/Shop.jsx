import ProductCard from '../components/ProductCard/ProductCard.jsx';
import products from '../data/products.js';

export default function Shop() {
  return (
    <>
      <h1>Shop</h1>
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </>
  );
}
