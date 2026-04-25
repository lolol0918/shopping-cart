export async function getProducts() {
  try {
    // It will store cached data here to avoid refetching
    const cached = JSON.parse(localStorage.getItem('producstCache'));

    // if it is rendered more than once it will return the cached data to avoid refetching
    // refetches every 1-hour
    if (cached && Date.now() - cached.timestamp < 1000 * 60 * 60) {
      return cached.data;
    }

    // Wait for the network request to complete
    const res = await fetch('https://fakestoreapi.com/products');

    // Manually check for http errors
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await res.json();

    // normalizing the structure
    const normalized = data.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
      category: item.category,
    }));

    // caches the products to the localStorage
    localStorage.setItem(
      'producstCache',
      JSON.stringify({
        data: normalized,
        timestamp: Date.now(),
      }),
    );

    // if it is rendered the first time it will return the normalized data
    return normalized;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}
