// api.js

import axios from 'axios';

const API_BASE_URL = 'https://test-server-url.com';

export async function fetchProducts() {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Add more API functions for authentication, filtering, etc.
