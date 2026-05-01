import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [catsRes, prodsRes] = await Promise.all([
        pb.collection('categories').getFullList({ sort: 'displayOrder', $autoCancel: false }),
        pb.collection('products').getFullList({ expand: 'categoryId', sort: 'displayOrder', $autoCancel: false })
      ]);
      setCategories(catsRes);
      setProducts(prodsRes);
      setError(null);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { products, categories, loading, error, refetch: fetchData };
}