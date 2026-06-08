import { useState, useEffect } from 'react';
import collectionData from '../data/collection.json';

export function useCollection(category) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filtered = collectionData.filter(item => item.category === category);
    setItems(filtered);
    setLoading(false);
  }, [category]);

  return { items, loading };
}