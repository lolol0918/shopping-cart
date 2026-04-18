export default function ProductCard({ product }) {
  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button type="">Add to Cart</button>
    </div>
  );
}
