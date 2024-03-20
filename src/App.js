// App.js

import React, { useState, useEffect } from 'react';
import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';
import { fetchProducts } from './api';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when component mounts
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {/* Routing logic can be added here to switch between pages */}
      <ProductListPage products={products} />
      <ProductDetailPage />
    </div>
  );
}

export default App;
