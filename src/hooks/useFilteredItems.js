import { useState, useMemo } from 'react';

export function useFilteredItems(items) {
  const [currentBrand, setCurrentBrand] = useState('all');
  const [currentFamily, setCurrentFamily] = useState('all');

  const brands = useMemo(() => {
    const unique = ['all', ...new Set(items.map(item => item.brand))];
    return unique;
  }, [items]);

  const families = useMemo(() => {
    const unique = ['all', ...new Set(items.map(item => item.family))];
    return unique.sort();
  }, [items]);

  const filteredItems = useMemo(() => {
    let filtered = items;

    if (currentBrand !== 'all') {
      filtered = filtered.filter(item => item.brand === currentBrand);
    }
    else if (currentFamily !== 'all') {
      filtered = filtered.filter(item => item.family === currentFamily);
    }

    return filtered;
  }, [items, currentBrand, currentFamily]);

  const handleBrandChange = (brand) => {
    setCurrentBrand(brand);
    if (brand !== 'all') {
      setCurrentFamily('all');
    }
  };

  const handleFamilyChange = (family) => {
    setCurrentFamily(family);
    if (family !== 'all') {
      setCurrentBrand('all');
    }
  };

  return {
    brands,
    families,
    currentBrand,
    currentFamily,
    filteredItems,
    handleBrandChange,
    handleFamilyChange
  };
}