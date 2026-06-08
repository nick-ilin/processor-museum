import styles from './FilterBar.module.css';

export default function FilterBar({
                                    brands,
                                    families,
                                    currentBrand,
                                    currentFamily,
                                    onBrandChange,
                                    onFamilyChange
                                  }) {
  return (
    <div className={styles.filterBar}>
      <select
        className={styles.select}
        value={currentBrand}
        onChange={(e) => onBrandChange(e.target.value)}
      >
        {brands.map(brand => (
          <option key={brand} value={brand}>
            {brand === 'all' ? 'Все производители' : brand}
          </option>
        ))}
      </select>

      <select
        className={styles.select}
        value={currentFamily}
        onChange={(e) => onFamilyChange(e.target.value)}
      >
        <option value="all">Все семейства</option>
        {families.filter(f => f !== 'all').map(family => (
          <option key={family} value={family}>
            {family}
          </option>
        ))}
      </select>
    </div>
  );
}