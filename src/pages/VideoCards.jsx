import { useCollection } from '../hooks/useCollection';
import { useFilteredItems } from '../hooks/useFilteredItems';
import FilterBar from '../components/FilterBar/FilterBar';
import DeviceList from '../components/DeviceList/DeviceList';
import styles from './Pages.module.css';

export default function VideoCards() {
  const { items, loading } = useCollection('gpu');
  const {
    brands,
    families,
    currentBrand,
    currentFamily,
    filteredItems,
    handleBrandChange,
    handleFamilyChange
  } = useFilteredItems(items);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;

  return (
    <div className={styles.page}>
      <FilterBar
        brands={brands}
        families={families}
        currentBrand={currentBrand}
        currentFamily={currentFamily}
        onBrandChange={handleBrandChange}
        onFamilyChange={handleFamilyChange}
      />
      <DeviceList items={filteredItems} category="gpu" />
    </div>
  );
}