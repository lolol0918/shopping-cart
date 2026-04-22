export async function getProducts() {
  try {
    // Wait for the network request to complete
    const res = await fetch('https://fakestoreapi.com/products');

    // Manually check for http errors
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await res.json();

    // normalizing the structure
    return data.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
      category: item.category,
    }));
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}
