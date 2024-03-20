// ProductListPage.js

import React from 'react';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

function ProductListPage({ products }) {
  return (
    <div>
      <h1>All Products</h1>
      <ProductFilter />
      <ProductList products={products} />
    </div>
  );
}

export default ProductListPage;
